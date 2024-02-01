window.onload = main;

let photos = ["images/log_1.svg", "images/log_2.svg", "images/log_3.svg", "images/log_4.svg", "images/log_5.svg", "images/log_6.svg"];
let idx = 0;
function main() {
    document.querySelector("#nextPhoto").onclick = nextPhoto;
    document.querySelector("#previousPhoto").onclick = prevPhoto;
}

function changeImage(index) {
    document.getElementById("img").src = photos[index];
    idx = index;
}

function nextPhoto() {
    if(idx + 1 == photos.length) {
        idx = 0;
    } else {
        idx++;
    }
    changeImage(idx);
}

function prevPhoto() {
    if(idx - 1 < 0) {
        idx = photos.length - 1;
    } else {
        idx--;
    }
    changeImage(idx);
}