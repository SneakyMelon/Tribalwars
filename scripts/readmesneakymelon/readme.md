###Usage

* Populate the village list.
* Change the units to your farming wishes.
* Save as a new bookmark

[code]
javascript:
var village_list = "";
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
[/code]

###Issues
Any issues, please submit a bug report at https://github.com/sneakymelon/Tribalwars/issues/new

###Thank you
Thanks for using the Farming Script.
