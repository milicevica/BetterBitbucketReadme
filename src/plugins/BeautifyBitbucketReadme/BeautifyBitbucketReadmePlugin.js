import ContentPlugin from "../../lib/ContentPlugin.js";

class BeautifyBitbucketReadmePlugin extends ContentPlugin {
    constructor() {
        super("Beautify Bitbucket Readme");
    }

    id = "968e43a1-644e-480a-adab-7cb9adc9445e";

    run() {
        console.log("Running BeautifyBitbucketReadmePlugin...");

        this.injectScript("/plugins/BeautifyBitbucketReadme/beautify.js");
        this.injectScript("/lib/markdown-it.min.js");

        this.injectStyle("/plugins/BeautifyBitbucketReadme/beautify.css");
    }

    injectScript(script) {
        let scriptElement = document.createElement("script");

        scriptElement.src = chrome.runtime.getURL(script);

        (document.head || document.documentElement).appendChild(scriptElement);

        scriptElement.onload = function () {
            scriptElement.parentNode.removeChild(scriptElement);
        }
    }

    injectStyle(style) {
        let linkElement = document.createElement("link");

        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = chrome.runtime.getURL(style);

        console.log("Link element: ", linkElement);

        (document.head || document.documentElement).appendChild(linkElement);
    }
}

export default BeautifyBitbucketReadmePlugin;
