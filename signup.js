let userId = document.getElementById("userId");
let pass = document.getElementById("pass");
let repass = document.getElementById("repass");
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
const dbID = "123";

//id 중복처리
userId.onchange = () => {
  if (userId.value) {
    userId.classList.remove("must");
  } else {
    userId.classList.add("must");
  }

  if (userId.value == dbID) {
    document.querySelector(".caution-id").classList.remove("hidden");
  } else {
    document.querySelector(".caution-id").classList.add("hidden");
  }
};

//비밀번호 입력처리
let char = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

pass.onchange = () => {
  if (pass.value) {
    pass.classList.remove("must");
  } else {
    pass.classList.add("must");
  }

  if (repass.value != pass.value) {
    document.querySelector(".caution-repass").classList.remove("hidden");
  } else {
    document.querySelector(".caution-repass").classList.add("hidden");
  }
};

repass.onchange = () => {
  if (repass.value) {
    repass.classList.remove("must");
  } else {
    repass.classList.add("must");
  }

  if (repass.value != pass.value) {
    document.querySelector(".caution-repass").classList.remove("hidden");
  } else {
    document.querySelector(".caution-repass").classList.add("hidden");
  }
};

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

//회원가입 버튼 상호작용
const signup = document.querySelector(".signup");

signup.addEventListener("click", () => {
  let must = document.querySelector(".must");

  if (must) {
    alert(`${must.name} 항목을 작성해 주십시오.`);
  } else {
    location.href = "index.html";
    alert(`${userName.value}님 환영합니다.`);
  }
});