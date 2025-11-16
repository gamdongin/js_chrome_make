const imgArray = ["6057300.jpg","6060118.jpg","jepum-baechi-3d-geulim-e-daehan-chusang-baegyeong-ip-geulimja-bich-seutyudio-bin-baegyeong-jepum-diseupeullei-jangmyeon.jpg"];

const img = imgArray[Math.floor(Math.random()*imgArray.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/background/${img}`;

document.body.appendChild(bgImg);
