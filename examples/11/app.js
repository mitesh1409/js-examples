function loadScript(src, callback) {
    const scriptElement = document.createElement('script');
    scriptElement.src = src;

    scriptElement.onload = () => callback(null, scriptElement);
    scriptElement.onerror = () => callback(new Error(`Failed to load script - ${src}`));

    document.head.append(scriptElement);
}

loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(error, script) {
        if (error) {
            console.error(`ERROR: ${error.message}`);
            return;
        }

        // We can use variables, functions etc. publically available from the script here in this callback.
        console.log(`Script - ${script.src} loaded successfully.`);
        console.log('_ function', _);
    }
);
