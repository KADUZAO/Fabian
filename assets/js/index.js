let currentImageIndex = 0;
const images = document.querySelectorAll("#slider .image img");
const max = images.length;

let currentBulletIndex = 0;
const bullets = document.querySelectorAll("#slider .image .bullets .bullet")

function nextImage() {
    images[currentImageIndex].classList.remove("selected");
    bullets[currentBulletIndex].classList.remove("select");

    currentImageIndex++;
    currentBulletIndex++;

    if(currentImageIndex >= max) {
        currentImageIndex = 0;
        currentBulletIndex = 0;
    }

    images[currentImageIndex].classList.add("selected");
    bullets[currentBulletIndex].classList.add("select");
}

function downImage() {
    images[currentImageIndex].classList.remove("selected");
    bullets[currentBulletIndex].classList.remove("select");

    currentImageIndex--;
    currentBulletIndex--;

    if(currentImageIndex <= -1) {
        currentImageIndex = 11;
        currentBulletIndex = 11;
    }

    images[currentImageIndex].classList.add("selected");
    bullets[currentBulletIndex].classList.add("select");
}