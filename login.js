let userId = document.getElementById("userId");
let pass = document.getElementById("pass");

userId.onchange = () => {
  if (userId.value) {
    userId.classList.remove("must");
  } else {
    userId.classList.add("must");
  }
};

pass.onchange = () => {
  if (pass.value) {
    pass.classList.remove("must");
  } else {
    pass.classList.add("must");
  }
};

//로그인 버튼 상호작용
const login = document.querySelector(".login-btn");

login.addEventListener("click", () => {
  let must = document.querySelector(".must");

  if (must) {
    alert(`${must.name}를 입력해주세요.`);
  } else {
    location.href = "main.html";
  }
});

window.addEventListener("keypress", checkPressed, false);

function checkPressed(e) {
  let must = document.querySelector(".must");

  if (e.charCode === 13) {
    if (must) {
      alert(`${must.dataset.name}를 입력해주세요.`);
      console.log(must);
    } else {
      location.href = "main.html";
    }
  }
}

//input 내용 초기화
const upDelete = document.querySelector(".up-delete-btn");
const downDelete = document.querySelector(".down-delete-btn");

upDelete.addEventListener("click", () => {
  userId.value = "";
});

downDelete.addEventListener("click", () => {
  pass.value = "";
});
