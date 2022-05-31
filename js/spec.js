const changeDataBtn = document.querySelector(".change-data");
const specEditRemote = document.querySelector(".spec-edit-remote");
const remoteBG = document.querySelector(".remote-bg");

changeDataBtn.addEventListener("click", () => {
  changeDataBtn.classList.add("invincible");
  specEditRemote.classList.remove("invincible");
  remoteBG.classList.remove("hidden");
});

remoteBG.addEventListener("click", () => {
  changeDataBtn.classList.remove("invincible");
  specEditRemote.classList.add("invincible");
  remoteBG.classList.add("hidden");
});

//page height 계산
const infoTab = document.querySelector(".infotab"),
  eduTab = document.querySelector(".edutab"),
  careerTab = document.querySelector(".careertab"),
  certifTab = document.querySelector(".certiftab"),
  activityTab = document.querySelector(".activitytab"),
  portfolTab = document.querySelector(".portfoltab"),
  langTab = document.querySelector(".langtab"),
  page = document.querySelector(".page");

let infoLength,
  eduLength,
  careerLength,
  certifLength,
  activityLength,
  langLength,
  portfolLength,
  coverletterLength;

if (infoTab.classList.contains("hidden")) {
  infoLength = 0;
} else {
  infoLength = 1;
}
if (eduTab.classList.contains("hidden")) {
  eduLength = 0;
} else {
  eduLength = 1;
}
if (careerTab.classList.contains("hidden")) {
  careerLength = 0;
} else {
  careerLength = 1;
}
if (certifTab.classList.contains("hidden")) {
  certifLength = 0;
} else {
  certifLength = 1;
}
if (activityTab.classList.contains("hidden")) {
  activityLength = 0;
} else {
  activityLength = 1;
}
if (langTab.classList.contains("hidden")) {
  langLength = 0;
} else {
  langLength = 1;
}
if (portfolTab.classList.contains("hidden")) {
  portfolLength = 0;
} else {
  portfolLength = 1;
}

let sumTab = `calc(${infoLength}*40rem + ${eduLength}*15rem + ${careerLength}*30rem + ${certifLength}*35rem + ${activityLength}*20rem + ${langLength}*20rem + ${portfolLength}*25rem + 30rem)`;

if (infoLength && eduLength) {
  page.style.height = sumTab;
} else {
  sumTab = "85rem";
}
