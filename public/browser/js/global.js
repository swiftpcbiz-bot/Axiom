const scripts = [
    "/js/plugins.js",
]

if (scripts.length > 0) {

    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = window.location.href.includes("/browser/") ? "." + src : "/browser/" + src;
        script.defer = true;
        document.head.appendChild(script);
    })
}