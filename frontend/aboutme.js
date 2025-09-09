const images = ["img/1-2.jpg", "img/IMG_9344.jpg","img/InShot_20250608_071140690.jpg","img/IMG_9534.jpeg", "img/IMG_9507.jpeg"]; // Add your image paths
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("dp").src = images[index];
}, 3000); // Change every 3 seconds