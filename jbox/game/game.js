if (
  localStorage.getItem("JBOX_GAME_CODE") &&
  localStorage.getItem("JBOX_GAME_DATA")
) {
  eval(localStorage.getItem("JBOX_GAME_DATA"));
  eval(localStorage.getItem("JBOX_GAME_CODE"));
}
