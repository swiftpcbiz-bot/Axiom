// FUCK ALL YOUR RULES IM STILL TICKLING MY WILLY

if (!window.axiom) {

const version = "1.0.0";
const deprecated = "0.0.0"; // update this when any big changes to the api are made 

async function check(key) {
    try {
        const response = await fetch("/api/premium/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                { axiomPremiumKey: key }
            ),
        });
        const data = await response.json();
        if (data.success) {
            localStorage.setItem('axiomPremium', 'true');
            return true;
        } else {
            localStorage.setItem('axiomPremium', 'false');
            return false;
        }
    } catch (error) {
        localStorage.setItem('axiomPremium', 'false');
        return false;
    }
}

if (localStorage.getItem('axiomPremiumKey')){
    check(localStorage.getItem('axiomPremiumKey'));
}

class AxiomAPI {
    constructor() {
    }
    handleCallback(callback){
        document.getElementsByClassName('dialog')[0].remove();
    }
    async getKeyInfo(key) {
        return await check(key);
    }
    setKey(key) {
        localStorage.setItem('axiomPremiumKey', key);
    }
    dialog(message, positive, negative, callback) {

        let code = `
        <div class="dialog">
        <div class="dialog-message">${message}</div>
        <div class="dialog-buttons">
            <button class="dialog-button dialog-button-positive" id="pos" >${positive}</button>
            <button class="dialog-button dialog-button-negative" id="neg" >${negative}</button>
        </div>
        </div>
        `;

        // add to before </body>
        document.body.insertAdjacentHTML('beforeend', code);

        document.getElementById('pos').addEventListener('click', () => {
            this.handleCallback(callback(positive))
        });
        document.getElementById('neg').addEventListener('click', () => {
             this.handleCallback(callback(negative))
        });
    }
}

class AxiomPluginManager {
    constructor() {
        this.plugins = []
    }
    register(plugin) {
        if (parseInt(plugin.version.replace(".","")) <= parseInt(deprecated.replace(".",""))) { console.error("Cannot load plugin " + plugin.name + " due to it being outdated."); return;}
        if (plugin.author == "" || plugin.name == null) { console.error("Cannot load plugin " + plugin.name + " due to it being invalid."); return;}
        this.plugins.push(plugin);
    }
    setProxy(proxy) {
        if (proxy !== "uv" && proxy !== "scramjet" && proxy !== "oxygen") return;
        localStorage.setItem('axiomProxy', proxy);
    }
    setHomepage(homepage, customUrl="") {
        if (homepage !== "start" && homepage !== "games" && homepage !== "custom") return; 
        localStorage.setItem('axiomHomepage', homepage);
        if (homepage === "custom") localStorage.setItem('axiomCustomHomepage', customUrl);
    }
    setTheme(theme) {
        localStorage.setItem('axiomTheme', theme); // lol we aint adding no fucking checks on this one, fuck up the theme if you want
    }
    resetAll(){
        window.axiom.dialog('Are you sure you want to reset all settings to their default values?', 'Yes', 'No', (response) => {
            if (response === "Yes") {
                localStorage.clear();
                // remove cookies
                document.cookie.split(';').forEach(cookie => {
                    document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
                });
                window.location.reload();
            }
        })
    }
}

    window.axiom = new AxiomAPI();
    window.axiomPluginAPI = new AxiomPluginManager();
    console.log(`Axiom API v${version}`);

    // load plugins
    plugins = localStorage.getItem("axiomPlugins")

    plugins = plugins ? JSON.parse(plugins) : [];

    plugins.forEach((plugin) => {
        fetch("/api/plugin/" + plugin.src).then((response) => response.text()).then((data) => {
            eval(data);
        })
    })

}