var village_list = "634|498 634|501 634|502 632|500 633|502 631|503 630|504 635|504 636|496 636|500 636|502 636|503 637|504 638|502 636|501 633|505 637|506 638|507 638|508 634|508 631|508 640|503 635|494 632|494";
var units = {
    ram : 0,
    catapult : 0,
    sword : 0,
    spear : 0,
    axe : 0,
    archer : 0,
    spy : 4,
    light : 10,
    marcher : 0,
    heavy : 0,
};

if (typeof window.$ === "function" && typeof window.$.getScript === "function") {
  UI.SuccessMessage("Loading scripts... Please wait...", 4000);
  window.$.getScript("https://sneakymelon.github.io/Tribalwars/scripts/farming/Non%20Randomised%20Farming/Tribalwars%20Farming%20Script.js");
} else {
  UI.ErrorMessage("Can not access getScript Method. Please submit a new <a href='https://gitub.com/SneakyMelon/Tribalwars/issues/new'>bug report</a>", 5000);
}
