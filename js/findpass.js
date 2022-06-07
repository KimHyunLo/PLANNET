let userId = document.getElementById("userId");
let answer = document.getElementById("answer");
let userName = document.getElementById("userName");
let verify = "1234";

userName.onchange = () => {
  if (userName.value) {
    userName.classList.remove("must");
  } else {
    userName.classList.add("must");
  }
};

answer.onchange = () => {
  if (answer.value) {
    answer.classList.remove("must");
  } else {
    answer.classList.add("must");
  }
};

userId.onchange = () => {
  if (userId.value) {
    userId.classList.remove("must");
  } else {
    userId.classList.add("must");
  }
};

//찾기 버튼 상호작용
const conti = document.querySelector(".conti");

conti.addEventListener("click", () => {
  let must = document.querySelector(".must");

  if (must) {
    alert(`${must.dataset.name} 항목을 다시 입력해주세요.`);
  } else {
    if (answer.value == verify) {
      location.href = "/html/change_pass.html";
    } else {
      alert("질문 답변이 일치하지 않습니다.");
      verify.value = "";
    }
  }
});
