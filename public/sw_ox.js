//gay
importScripts("ox/ox.bundle.js");
importScripts("ox/ox.config.js");
importScripts("ox/ox.cache.js");
importScripts("ox/ox.sw.js");

const ox = new OXServiceWorker();

// Initialize cache if enabled
if (ox.cache) {
	console.log("OX Cache enabled with configuration:", ox.config.cache);
}

async function handleRequest(event) {
	if (ox.route(event)) {
		return await ox.fetch(event);
	}

	return await fetch(event.request);
}

self.addEventListener("fetch", (event) => {
	// check if we need to reject
	if (__ox$config.blockedSites.includes(event.request.url.split("/")[3])) return event.respondWith(new Response(null, { status: 403 }));
	event.respondWith(handleRequest(event));
});