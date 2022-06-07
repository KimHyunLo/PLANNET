let high = document.getElementById("high");
let univ = document.getElementById("univ");

if (univ.checked) {
  document.querySelector(".high").style.display = "none";
} else {
  document.querySelector(".univ").style.display = "none";
}

high.addEventListener("click", () => {
  document.querySelector(".high").style.display = "flex";
  document.querySelector(".univ").style.display = "none";
  document.getElementById("school_name").value = "";
  document.getElementById("major").value = "";
  document.getElementById("grades").value = "";
  document.getElementById("start_date").value = "";
  document.getElementById("end_date").value = "";
});

univ.addEventListener("click", () => {
  document.querySelector(".high").style.display = "none";
  document.querySelector(".univ").style.display = "flex";
  document.getElementById("school_name").value = "";
  document.getElementById("start_date").value = "";
  document.getElementById("end_date").value = "";
});
