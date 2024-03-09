let backGroundImages = [
  "./images/jool3.jpg",
  "./images/eve1.jpg",
  "./images/sarnus1.jpg",
  "./images/urlum2.jpg",
];

function getRandomBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * backGroundImages.length);
  const randomBackgroundImage = backGroundImages[randomIndex];
  return randomBackgroundImage;
}

function changeBackgroundImage(img) {
  document.body.style.backgroundImage = `url(${img})`;
}
document.body.style.backgroundImage = `url(${getRandomBackgroundImage()})`;

document.onload = changeBackgroundImage(getRandomBackgroundImage());
