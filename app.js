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
  console.log("Credit for the images goes to Astronomer's Visual Pack");
  console.log(
    "https://forum.kerbalspaceprogram.com/topic/160878-ksp-1123-astronomers-visual-pack-beyond-v413-july-17th-2022/"
  );
}
document.body.style.backgroundImage = `url(${getRandomBackgroundImage()})`;

document.onload = changeBackgroundImage(getRandomBackgroundImage());

console.log("Hello there! how's your day scouting your browser's console?");
