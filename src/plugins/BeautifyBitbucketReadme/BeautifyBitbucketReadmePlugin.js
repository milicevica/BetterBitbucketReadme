import ContentPlugin from "../../lib/ContentPlugin";

class BeautifyBitbucketReadmePlugin extends ContentPlugin {
    constructor() {
        super("Beautify Bitbucket Readme");
    }

    id = "968e43a1-644e-480a-adab-7cb9adc9445e";

    run() {
        console.log("Running BeautifyBitbucketReadmePlugin...");
    }
}

export default BeautifyBitbucketReadmePlugin;
