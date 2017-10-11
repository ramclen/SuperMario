export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.src = url;
        image.addEventListener('load', function () {
            setTimeout(resolve, 2000, image)
            resolve(image);
        });
    });
};

export function loadLevel(level) {
    return fetch(`./levels/${level}.json`)
        .then(response =>response.json())
        .then(json => new Promise(resolve=>setTimeout(resolve, 2000, json)));

}