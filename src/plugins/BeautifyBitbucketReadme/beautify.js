function beautify() {
    let readmeDiv = document.querySelector("[data-qa='readme-container']");

    if (readmeDiv) {
        clearInterval(interval);

        let button = createBeautifyButtonElement();

        // We need to modify Bitbucket DOM element and make it relative,
        // so we can position absolute our button in the top right corner.
        readmeDiv.parentElement.style.cssText += "position: relative;";

        readmeDiv.parentElement.appendChild(button);
    }
}

function createBeautifyButtonElement() {
    let button = document.createElement("button");
    let span = document.createElement("span");

    span.id = "beautifyBitbucketReadmeBtnTxt";

    span.appendChild(document.createTextNode("Beautify"));

    button.appendChild(span);

    button.id = "beautifyBitbucketReadmeBtn";

    button.addEventListener("click", function () {
        button.classList.toggle("beautifyBitbucketReadmeBtnLoading");
        handleBeautify();
    });

    return button;
}

function handleBeautify() {
    let hash = window.__initial_state__.repository.source.section.hash; // Unique Bitbucket repo hash
    let currentLocation = window.location.href;
    let basePath = currentLocation.split("/src")[0];
    let readmePath = `${basePath}/raw/${hash}/README.md`;
    let readmeDiv = document.querySelector("[data-qa='readme-container']");
    let button = document.querySelector("#beautifyBitbucketReadmeBtn");
    let images = readmeDiv.querySelectorAll("img");
    let paths = [];

    // We need to save src of all images on the page,
    // so we don't break them
    images.forEach((image) => {
        paths.push(image.src);
    });

    fetch(readmePath)
        .then(response => response.text())
        .then(result => {
           let md = window.markdownit({ html: true });
           let mdResult = md.render(result);

           readmeDiv.innerHTML = "";
           readmeDiv.innerHTML = mdResult;

           // Set correct src for images.
           readmeDiv.querySelectorAll("img").forEach((image, index) => {
               image.src = paths[index];
           });

           // Hide button
            button.style.display = "none";
        });
}

let interval = setInterval(beautify, 1500);
