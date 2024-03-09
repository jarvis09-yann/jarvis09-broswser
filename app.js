const randomSiteLink = document.getElementById("randomSiteLink");
const backGroundImages = [
  "./images/jool3.jpg",
  "./images/eve1.jpg",
  "./images/sarnus1.jpg",
  "./images/urlum2.jpg",
];

const randomWebPage = [
  "https://blackmesa.jarvis09.com",
  "https://floridaman.jarvis09.com",
  "https://portfolio.jarvis09.com",
];

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomItem = array[randomIndex];
  return randomItem;
}

function changeBackgroundImage(img) {
  document.body.style.backgroundImage = `url(${img})`;
  console.log("Credit for the images goes to Astronomer's Visual Pack");
  console.log(
    "https://forum.kerbalspaceprogram.com/topic/160878-ksp-1123-astronomers-visual-pack-beyond-v413-july-17th-2022/"
  );
}

document.body.style.backgroundImage = `url(${getRandomItem(backGroundImages)})`;
randomSiteLink.setAttribute("href", getRandomItem(randomWebPage));

console.log("Hello there! how's your day scouting your browser's console?");
