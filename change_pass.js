let newPass = document.getElementById("newPass");
let renewPass = document.getElementById("renewPass");

newPass.onchange = () => {
  if (newPass.value) {
    newPass.classList.remove("must");
  } else {
    newPass.classList.add("must");
  }
};

renewPass.onchange = () => {
  if (renewPass.value) {
    renewPass.classList.remove("must");
  } else {
    renewPass.classList.add("must");
  }
};

//찾기 버튼 상호작용
const change = document.querySelector(".change");

change.addEventListener("click", () => {
  let must = document.querySelector(".must");

  if (must) {
    alert(`${must.name}를 입력해주세요.`);
  } else {
    if (newPass.value != renewPass.value) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("비밀번호가 변경되었습니다.");
      location.href = "index.html";
    }
  }
});
