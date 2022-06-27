(async () => {
    const src = chrome.runtime.getURL("plugins/index.js");
    const { default: plugins } = await import(src);

    plugins.forEach(plugin => {
        // Run only supported Plugin type.
       if (plugin.type === "content") {
           plugin.run();
       }
    });
})();
