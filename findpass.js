let userId = document.getElementById("userId");
let email = document.getElementById("email");
let userName = document.getElementById("userName");
let verify = document.getElementById("verify");
let verifyNum = "1234";

userName.onchange = () => {
  if (userName.value) {
    userName.classList.remove("must");
  } else {
    userName.classList.add("must");
  }
};

email.onchange = () => {
  if (email.value) {
    email.classList.remove("must");
  } else {
    email.classList.add("must");
  }
};

userId.onchange = () => {
  if (userId.value) {
    userId.classList.remove("must");
  } else {
    userId.classList.add("must");
  }
};

verify.onchange = () => {
  if (verify.value) {
    verify.classList.remove("must");
  } else {
    verify.classList.add("must");
  }
};

//찾기 버튼 상호작용
const conti = document.querySelector(".conti");

conti.addEventListener("click", () => {
  let must = document.querySelector(".must");

  if (must) {
    alert(`${must.name}을 입력해주세요.`);
  } else {
    if (verify.value == verifyNum) {
      location.href = "change_pass.html";
    } else {
      alert("인증번호가 틀렸습니다.");
      verify.value = "";
    }
  }
});
