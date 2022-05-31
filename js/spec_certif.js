let certif = document.getElementById("certif");
let lang = document.getElementById("lang");
let awards = document.getElementById("awards");

if (lang.checked) {
  document.querySelector(".certif").style.display = "none";
  document.querySelector(".awards").style.display = "none";
} else if (certif.checked) {
  document.querySelector(".lang").style.display = "none";
  document.querySelector(".awards").style.display = "none";
} else {
  document.querySelector(".lang").style.display = "none";
  document.querySelector(".certif").style.display = "none";
}

certif.addEventListener("click", () => {
  document.querySelector(".certif").style.display = "flex";
  document.querySelector(".lang").style.display = "none";
  document.querySelector(".awards").style.display = "none";
  clearAwards();
  clearLang();
});

lang.addEventListener("click", () => {
  document.querySelector(".certif").style.display = "none";
  document.querySelector(".lang").style.display = "flex";
  document.querySelector(".awards").style.display = "none";
  clearCertif();
  clearAwards();
});

awards.addEventListener("click", () => {
  document.querySelector(".certif").style.display = "none";
  document.querySelector(".lang").style.display = "none";
  document.querySelector(".awards").style.display = "flex";
  clearLang();
  clearCertif();
});

let clearCertif = () => {
  document.getElementById("certificate_name").value = "";
  document.getElementById("issued").value = "";
  document.getElementById("date_of_get").value = "";
};

let clearLang = () => {
  document.getElementById("language_name").value = "";
  document.getElementById("test_type").value = "";
  document.getElementById("test_score").value = "";
  document.getElementById("lang_date").value = "";
};

let clearAwards = () => {
  document.getElementById("awards_name").value = "";
  document.getElementById("awards_place").value = "";
  document.getElementById("awards_date").value = "";
};
