const imgArray = ["6057300.jpg","6060118.jpg","jepum-baechi-3d-geulim-e-daehan-chusang-baegyeong-ip-geulimja-bich-seutyudio-bin-baegyeong-jepum-diseupeullei-jangmyeon.jpg"];

const img = imgArray[Math.floor(Math.random()*imgArray.length)];

const bgImg = document.createElement("style");
bgImg.innerText = `body {background-image: url(img/background/${img});
    ground-position: center; background-repeat: no-repeat; background-size: cover; }`;
document.head.appendChild(bgImg);