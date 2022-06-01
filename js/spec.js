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
  awardsTab = document.querySelector(".awardstab"),
  activityTab = document.querySelector(".activitytab"),
  portfolTab = document.querySelector(".portfoltab"),
  langTab = document.querySelector(".langtab"),
  page = document.querySelector(".page");

let infoLength,
  eduLength,
  careerLength,
  certifLength,
  awardsLength,
  langLength,
  portfolLength,
  activityLength;

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
if (awardsTab.classList.contains("hidden")) {
  awardsLength = 0;
} else {
  awardsLength = 1;
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
if (activityTab.classList.contains("hidden")) {
  activityLength = 0;
} else {
  activityLength = 1;
}

let sumTab = `calc(${infoLength}*40rem + ${eduLength}*15rem + ${careerLength}*30rem + ${certifLength}*35rem + ${awardsLength}*20rem + ${langLength}*20rem +  ${portfolLength}*50rem + ${activityLength}*35rem + 30rem)`;

if (infoLength && eduLength) {
  page.style.height = sumTab;
} else {
  page.style.height = "85rem";
}

let infoNewList = document.querySelector(".info-area");
let highNewList = document.querySelectorAll(".edutab .high");
let univNewList = document.querySelectorAll(".edutab .univ");
let careerNewList = document.querySelectorAll(".careertab .new-list");
let certifNewList = document.querySelectorAll(".certiftab .certif");
let awardsNewList = document.querySelectorAll(".awardstab .awards");
let langNewList = document.querySelectorAll(".langtab .lang");
let activityNewList = document.querySelectorAll(".activitytab .new-list");
let portfolNewList = document.querySelectorAll(".portfoltab .new-list");

infoNewList.addEventListener("click", () => {
  location.href = "/html/spec_info.html";
});

highNewList.forEach((newList) => {
  newList.addEventListener("click", () => {
    location.href = "/html/edit_high.html";
  });
});

univNewList.forEach((newList) => {
  newList.addEventListener("click", () => {
    location.href = "/html/edit_univ.html";
  });
});

careerNewList.forEach((newList) => {
  newList.addEventListener("click", () => {
    location.href = "/html/spec_career.html";
  });
});

certifNewList.forEach((newList) => {
  newList.addEventListener("click", () => {
    location.href = "/html/edit_certif.html";
  });
});

awardsNewList.forEach((newList) => {
  newList.addEventListener("click", () => {
    location.href = "/html/edit_awards.html";
  });
});

langNewList.forEach((newList) => {
  newList.addEventListener("click", () => {
    location.href = "/html/edit_lang.html";
  });
});

activityNewList.forEach((newList) => {
  newList.addEventListener("click", () => {
    location.href = "/html/spec_activity.html";
  });
});

portfolNewList.forEach((newList) => {
  newList.addEventListener("click", () => {
    location.href = "/html/spec_portfol.html";
  });
});