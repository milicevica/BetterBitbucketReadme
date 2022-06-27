import ContentPlugin from "../../lib/ContentPlugin.js";

class BeautifyBitbucketReadmePlugin extends ContentPlugin {
    constructor() {
        super("Beautify Bitbucket Readme");
    }

    id = "968e43a1-644e-480a-adab-7cb9adc9445e";

    run() {
        console.log("Running BeautifyBitbucketReadmePlugin...");

        this.injectScripts("/plugins/BeautifyBitbucketReadme/beautify.js");
        this.injectScripts("/lib/markdown-it.min.js");
    }

    injectScripts(script) {
        let scriptElement = document.createElement("script");

        scriptElement.src = chrome.runtime.getURL(script);

        (document.head || document.documentElement).appendChild(scriptElement);

        scriptElement.onload = function () {
            scriptElement.parentNode.removeChild(scriptElement);
        }
    }
}

export default BeautifyBitbucketReadmePlugin;
