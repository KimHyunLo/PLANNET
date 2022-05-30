let userId = document.getElementById("userId");
let pass = document.getElementById("pass");
let repass = document.getElementById("repass");
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let answer = document.getElementById("answer");

let idHidden = document.getElementById("idHidden");
let repassHidden = document.getElementById("repassHidden");
let emailHidden = document.getElementById("emailHidden");

//id 중복처리
$("#userId").on("propertychange change keyup paste input", function () {
  var memberId = $(".id_input").val(); // .id_input에 입력되는 값
  var data = { id: memberId }; // '컨트롤에 넘길 데이터 이름' : '데이터(.id_input에 입력되는 값)'

  $.ajax({
    type: "post",
    url: "/signup",
    data: data,
  }); // ajax 종료
}); // function 종료

userId.onchange = () => {
  if (userId.value) {
    userId.classList.remove("must");
  } else {
    userId.classList.add("must");
  }

  if (idHidden.classList.contains("hidden")) {
    userId.classList.remove("retry");
  } else {
    userId.classList.add("retry");
  }
};

//입력처리
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

  if (repassHidden.classList.contains("hidden")) {
    repass.classList.remove("retry");
  } else {
    repass.classList.add("retry");
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

  if (emailHidden.classList.contains("hidden")) {
    email.classList.remove("retry");
  } else {
    email.classList.add("retry");
  }
};

//이메일 중복처리
email.focusout(() => {
  let userEmail = email.value;

  $.ajax({
    url: "emailCheckService",
    type: "post",
    data: { email: userEmail },
    datatype: "json",
    success: function (result) {
      if (result == 0) {
        emailHidden.classList.remove("hidden");
      } else {
        emailHidden.classList.add("hidden");
      }
    },
    error: function () {
      alert("서버요청실패");
    },
  });
});

answer.onchange = () => {
  if (answer.value) {
    answer.classList.remove("must");
  } else {
    answer.classList.add("must");
  }
};

//회원가입 버튼 상호작용
const signup = document.querySelector(".signup");

signup.addEventListener("click", () => {
  let must = document.querySelector(".must");
  let retry = document.querySelector(".retry");

  if (must) {
    alert(`입력이 안 된 사항이 있습니다.`);
  } else if (retry) {
    alert(`${retry.dataset.myname} 항목을 다시 작성 주십시오.`);
  } else {
    signup.setAttribute("type", "submit");
    alert(`${userName.value}님 환영합니다.`);
    location.href = "login.html";
  }
});

window.addEventListener("keypress", keyPressed, false);

function keyPressed(e) {
  let must = document.querySelector(".must");
  let retry = document.querySelector(".retry");

  if (e.charCode === 13) {
    if (must) {
      alert(`입력이 안 된 사항이 있습니다.`);
    } else if (retry) {
      alert(`${retry.dataset.myname} 항목을 다시 작성 주십시오.`);
    } else {
      signup.setAttribute("type", "submit");
      alert(`${userName.value}님 환영합니다.`);
      location.href = "login.html";
    }
  }
}
