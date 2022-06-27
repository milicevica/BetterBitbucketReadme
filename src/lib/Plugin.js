class Plugin {
    type = "not_set";

    constructor(name) {
        this.name = name || "not_set";
    }

    run() {
        console.log("Default plugin runner.");
    }
}

export default Plugin;
