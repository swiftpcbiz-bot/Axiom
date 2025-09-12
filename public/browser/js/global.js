const scripts = [
    // Add any additional scripts here when needed
]

if (scripts.length > 0) {
    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
    })
}