//    "@mercuryworkshop/scramjet": "https://github.com/MercuryWorkshop/scramjet/releases/download/latest/mercuryworkshop-scramjet-2.0.0-alpha.tgz",
const { createServer } = require("node:http");
const { fileURLToPath } = require("url");
const { join } = require('path');
const { hostname } = require("node:os");
const { server: wisp, logging } = require("@mercuryworkshop/wisp-js/server");
const Fastify = require("fastify");
const fastifyStatic = require("@fastify/static");
const cheerio = require("cheerio");
const { epoxyPath } = require("@mercuryworkshop/epoxy-transport");
const { baremuxPath } = require("@mercuryworkshop/bare-mux/node");
const { BlockList } = require("node:net");
const { Console } = require("node:console");


logging.set_level(logging.NONE);



Object.assign(wisp.options, {
  allow_udp_streams: false,
   hostname_blacklist: [/example\.com/],
  dns_servers: ["94.140.14.14"],
});

const fastify = Fastify({
	serverFactory: (handler) => {
		return createServer()
			.on("request", (req, res) => {
				handler(req, res);
			})
			.on("upgrade", (req, socket, head) => {
				if (req.url.endsWith("/wisp/")) wisp.routeRequest(req, socket, head);
				else socket.end();
			});
	},
});

fastify.register(fastifyStatic, {
    root: join(__dirname, 'public'),
	decorateReply: true,
});

fastify.register(fastifyStatic, {
	root: epoxyPath,
	prefix: "/epoxy/",
	decorateReply: false,
});

fastify.register(fastifyStatic, {
	root: baremuxPath,
	prefix: "/baremux/",
	decorateReply: false,
});

let plugins = [];
let plugin_code = {};

console.log("Fetching plugins from github...");
fetch("https://raw.githubusercontent.com/Axiom-Proxy/Axiom-Plugins-Directory/refs/heads/main/plugins.json").then((response) => response.json()).then((data) => {
    console.log("Fetched plugins from github!");
    plugins = data;
    plugin_code = {};

    plugins.forEach(plugin => {
        //https://raw.githubusercontent.com/Axiom-Proxy/Axiom-Plugins-Directory/refs/heads/main/

        // debug

        fetch(`https://raw.githubusercontent.com/Axiom-Proxy/Axiom-Plugins-Directory/refs/heads/main/${plugin.src}`).then((response) => response.text()).then((data) => {
            plugin_code[plugin.name] = data;
        })
    });
})

fastify.get("/api/plugins", (request, reply) => {
    reply.send(plugins);
})

fastify.get("/api/plugin/", (request, reply) => {
    // get body "src"
    let src = request.body.src;
    reply.send(plugin_code[src]);
})

fastify.register(fastifyStatic, {
  root: scramjetPath,
  prefix: "/scram/",
  decorateReply: false,
});

fastify.get("/ran", (request, reply) => {
    fetch("https://random-image-pepebigotes.vercel.app/api/random-image").then((response) => response).then((data) => {
        reply.send(data);
    })
})

fastify.get("/api/youtube/search", async (request, reply) => {
    try {
        const { query } = request.query;

        if (!query) {
            return reply.code(400).send({ error: "Query parameter is required" });
        }

        const invidiousUrl = `https://inv.nadeko.net/search?q=${encodeURIComponent(query)}`;
        const response = await fetch(invidiousUrl, {
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error('Invidious request failed');
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        const videos = $('.pure-u-1.pure-u-md-1-4').map((index, element) => {
            const $video = $(element);
            const $thumbnailLink = $video.find('.thumbnail a');
            const videoUrl = $thumbnailLink.attr('href');
            const videoId = videoUrl ? videoUrl.split('v=')[1] : null;

            if (!videoId) return null;

            const title = $video.find('.video-card-row a p[title]').text().trim() ||
                         $video.find('.video-card-row a p').text().trim();

            const channelName = $video.find('.video-card-row.flexible .flex-left a p.channel-name')
                .text().trim()
                .replace(/\s+/g, ' ')
                .replace(/\s*$/, '');

            const length = $video.find('.bottom-right-overlay p.length').text().trim();

            const videoDataElements = $video.find('.video-card-row.flexible .flex-left p.video-data, .video-card-row.flexible .flex-right p.video-data');
            let uploadDate = '';
            let viewCount = '';
            videoDataElements.each((i, el) => {
                const text = $(el).text().trim();
                if (text.toLowerCase().includes('ago') || text.toLowerCase().includes('shared')) {
                    uploadDate = text;
                } else if (text.toLowerCase().includes('view')) {
                    viewCount = text;
                }
            });

            const thumbnailUrl = $video.find('.thumbnail img.thumbnail').attr('src');
            const fullThumbnailUrl = thumbnailUrl && thumbnailUrl.startsWith('http') ?
                thumbnailUrl : `https://inv.nadeko.net${thumbnailUrl || `/vi/${videoId}/mqdefault.jpg`}`;

            let lengthSeconds = 0;
            if (length) {
                const parts = length.split(':');
                if (parts.length === 3) { // HH:MM:SS
                    lengthSeconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
                } else if (parts.length === 2) { // MM:SS
                    lengthSeconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
                }
            }

            return {
                videoId: videoId,
                title: title || 'Unknown Title',
                author: channelName || 'Unknown Channel',
                lengthSeconds: lengthSeconds,
                published: uploadDate || 'Unknown date',
                views: viewCount || '0 views',
                videoThumbnails: [
                    { url: fullThumbnailUrl },
                    { url: fullThumbnailUrl },
                    { url: fullThumbnailUrl }
                ],
                url: `https://www.youtube.com/watch?v=${videoId}`,
                invidiousUrl: `https://inv.nadeko.net${videoUrl}`
            };
        }).get().filter(video => video !== null);

        reply.send({ videos });

    } catch (error) {
        console.error('YouTube search error:', error);
        reply.code(500).send({ error: 'YouTube search failed' });
    }
})

fastify.post("/api/premium/check", async (request, reply) => {

    let active_keys = process.env.ACTIVE_KEYS.split(',');
    let key = request.body.axiomPremiumKey;
    if (active_keys.includes(key)) {
        reply.send({ success: true });
    } else {
        reply.send({ success: false });
    }
})

const apiKey = '1070730380f5fee0d87cf0382670b255'; 

fastify.get("/api/movies/search", async (request, reply) => {
    const query = request.query.query || '';

    if (!query.trim()) {
        return reply.code(400).send({ error: 'Query parameter is required' });
    }
    const movieResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const tvResponse = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`);
    const animeResponse = await fetch(`https://api.themoviedb.org/3/search/collection?api_key=${apiKey}&query=${query}`); 

    let movieData = await movieResponse.json();
    let tvData = await tvResponse.json();
    let animeData = await animeResponse.json();

    // add media_type to each result
    movieData.results.forEach(result => result.media_type = 'Movie');
    tvData.results.forEach(result => result.media_type = 'TV Show');
    animeData.results.forEach(result => result.media_type = 'Anime');

    // merge and send the results
    const results = [...movieData.results, ...tvData.results, ...animeData.results];
    reply.send({ results });
})

const endpoint = "https://api.groq.com/openai/v1/chat/completions";
const api_key = "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"; // no, this isn't my api key, so don't call me a dumbass for putting it here

fastify.post("/openai/v1/chat/completions", async (request, reply) => {
    try {
        const data = request.body;
        
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
            },
            body: JSON.stringify(data)
        });

        if (data.stream) {
            reply.raw.setHeader('Content-Type', 'text/plain');
            reply.raw.setHeader('Cache-Control', 'no-cache');
            reply.raw.setHeader('Connection', 'keep-alive');
            
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value, { stream: true });
                reply.raw.write(chunk);
            }
            reply.raw.end();
        } else {
            const json = await response.json();
            reply.send(json);
        }
        
    } catch (err) {
        console.error('AI endpoint error:', err);
        reply.code(500).send({ error: 'Internal Server Error' });
    }
});

fastify.setNotFoundHandler((res, reply) => {
	return reply.code(404).type('text/html').sendFile('404.html');
})

fastify.server.on("listening", () => {
	const address = fastify.server.address();

	console.log("Listening on:");
	console.log(`\thttp://localhost:${address.port}`);
	console.log(`\thttp://${hostname()}:${address.port}`);
	console.log(
		`\thttp://${
			address.family === "IPv6" ? `[${address.address}]` : address.address
		}:${address.port}`
	);
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
	console.log("SIGTERM signal received: closing HTTP server");
	fastify.close();
	process.exit(0);
}

let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 8080;

fastify.listen({
	port: port,
	host: "0.0.0.0",
});

