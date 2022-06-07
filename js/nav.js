//nav메뉴 hover이벤트
function navHover(item, icon, text) {
  const menuItem = document.getElementById(item);
  const menuIcon = document.getElementById(icon);
  const menuText = document.getElementById(text);

  menuItem.addEventListener("mousemove", () => {
    menuIcon.style.display = "none";
    menuText.style.display = "block";
  });

  menuItem.addEventListener("mouseout", () => {
    menuIcon.style.display = "block";
    menuText.style.display = "none";
  });
}

navHover("mainItem", "mainIcon", "mainText");
navHover("specItem", "specIcon", "specText");
navHover("jobItem", "jobIcon", "jobText");
navHover("setItem", "setIcon", "setText");
