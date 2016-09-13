javascript:
var village_list = "610|489 613|489 606|485 604|488 605|492 616|493";


if (typeof window.$ === "function" && typeof window.$.getScript === "function") {
  UI.SuccessMessage("Loading scripts... Please wait...", 2000);
  window.$.getScript("https://sneakymelon.github.io/Tribalwars/scripts/wars/Fake Generators/Tribes/EMPIRE/empire.js");
} else {
  UI.ErrorMessage("Can not access getScript Method. Please submit a new <a href='https://gitub.com/SneakyMelon/Tribalwars/issues/new'>bug report</a>", 5000);
}
