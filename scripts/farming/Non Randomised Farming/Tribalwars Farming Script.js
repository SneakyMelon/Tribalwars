
var d = document;

if (window.frames.length > 0) {
	d = window.main.document;
}

var rallyPointForm = d.forms[0];

function getStorage() {
	try {
		return localStorage.getItem("SM_farm_index");
	} catch (e) {
		return -1;
	}
}

function setStorage(value) {
	try {
		localStorage.setItem("SM_farm_index", value);
		return true;
	} catch (e) {
		return false;
	}
}

function redirect(location) {
	window.location = game_data.link_base_pure + location;
}

function init() {

	if (document.URL.indexOf('screen=place') === -1) {
		UI.ErrorMessage("This script must be run from the Rally Point. Redirecting . . .", 3000);
		setTimeout(function(){
			redirect("place");
		   }, 2000);
	} else {

			if (village_list === ""){
				UI.ErrorMessage("Your village list is empty. Please use at least one village in the format of xxx|yyy.", 4000);
			}
			else{
			var index = getStorage(); ;

			if (index === null) {
				index = 0;
				setStorage(index);
			} else if (index === -1) {
				UI.ErrorMessage("Local Storage is not enabled, or can not be written to.", 4000);
			}

			a = village_list.match(/(\d+\|\d+)/g);

			b = a[index].split("|");

			rallyPointForm.x.value = b[0];
			rallyPointForm.y.value = b[1];

			$('#place_target').find('input').val(b[0] + '|' + b[1])

			for (var unit in units) {
				if (units.hasOwnProperty(unit)) {
					if ((units[unit] > 0) && (typeof(rallyPointForm[unit]) != "undefined")) {
						count = parseInt(rallyPointForm[unit].nextSibling.nextSibling.innerHTML.match(/\d+/));

						if (count > 0) {
							rallyPointForm[unit].value = Math.min(units[unit], count);
						}
					}
				}
			}

			var len = a.length - 1;

			if (index == len) {
				setStorage(0);
				UI.SuccessMessage("You have reached the end of the list. The village index has been reset back to the first village.", 4000)
			} else {
				index++;
				setStorage(index);
			}
		}
	}
}

init();
