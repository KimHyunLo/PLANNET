const changeDataBtn = document.querySelector(".change-data");
const specEditRemote = document.querySelector(".spec-edit-remote");
const remoteBG = document.querySelector(".remote-bg");

changeDataBtn.addEventListener("click", () => {
  changeDataBtn.classList.add("invincible");
  specEditRemote.classList.remove("invincible");
});

remoteBG.addEventListener("click", () => {
  changeDataBtn.classList.remove("invincible");
  specEditRemote.classList.add("invincible");
});
