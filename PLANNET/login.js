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
    location.href='main.html';
  }
});
