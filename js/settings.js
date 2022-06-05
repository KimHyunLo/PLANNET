const popOpen = () => {
  var modalPop = $(".modal-wrap");
  var modalBg = $(".modal-bg");

  $(modalPop).show();
  $(modalBg).show();
};

const popClose = () => {
  var modalPop = $(".modal-wrap");
  var modalBg = $(".modal-bg");

  $(modalPop).hide();
  $(modalBg).hide();
};
