let userName = document.getElementById("userName");
let email = document.getElementById("email");

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

//찾기 버튼 상호작용
const find = document.querySelector(".find");

find.addEventListener("click", () => {
  let must = document.querySelector(".must");

  if (must) {
    alert(`${must.name}을 입력해주세요.`);
  } else {
    let idFound = "plannet123";
    alert(`회원님의 아이디는 ${idFound}입니다.`);
    location.href = "index.html";
  }
});

window.addEventListener("keypress", keyPressed, false);

function keyPressed(e) {
  let must = document.querySelector(".must");

  if(e.charCode === 13) {
    if (must) {
      alert(`${must.name}을 입력해주세요.`);
    } else {
      let idFound = "plannet123";
      alert(`회원님의 아이디는 ${idFound}입니다.`);
      location.href = "index.html";
    }
  }
}