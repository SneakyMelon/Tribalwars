


// Number of scouts to send with each attack.
var scouts = 1;

var config = {
	
	/*		This script can be used as a Farming script as well as fake.
	 *
	 * 		To use all units marked below, change useAllUnits from Zero (0) to One (1).
	 *
	 *		Otherwise, the script will loop through each until a single unit will be used
	 *		as a fake attack unit.
	 */
	useAllUnits: 0,

	/*
	 * List of units to send
	 *
	 * Sent in order -- if there are no rams, send cats, if no cats, send swords,
	 * The number represents how many are sent.
	 * 
	 * Change order to prioritise units. Top level has highest priority.
	 */
	 units : {
		ram : 1,
		catapult : 1,
		sword : 1,
		spear : 1,
		axe : 1,
		archer : 1,
		light : 1,
		marcher : 1,
		heavy : 1,
		
		/*
			 * 
			 * CARE - SNOB AND PALIDIN CAN BE USED IF WANTED, BUT NOT BY DEFAULT.
			 * CARE - REMOVE DOUBLE-SLASHES (//) TO ENABLE.
			 * 
		*/
		
		//knight: 0,
		//snob: 0,
	},
};

/*
	* init() will run if the script is run from rally point.
 *
 * @param	 Nothing
 * @return	 Nothing
 */

function init() {
	
	/*
		 * 
		 * Initialise variables
		 * 
	*/
	
	// Get the rally point form Form
	var rallyPointForm = document.forms[0];

	// Separate the list of coords into individual villages
	var coord = coords.split(" ");

	// Generate random coordinates
	var randomVillage = Math.floor(Math.random() * coord.length);
	var coordSplit = coord[randomVillage].split("|");

	// Create counting variable
	var count;

	// Shorthand configuration for units
	var units = {};
		units = config.units;
		
	// Get x and y co-ordinates
	rallyPointForm.x.value = coordSplit[0];
	rallyPointForm.y.value = coordSplit[1];

	// Get window
	var win = (window.frames.length > 0) ? window.main : window;
	
	// Set all attributes to units values to zero
	win.$("input[class=unitsInput]").attr("value", "0");

	// Determine to use scouts or not
	if (scouts > 0) {
		// Count number of available scouts
		count = parseInt(rallyPointForm.spy.nextSibling.nextSibling.innerHTML.match(/\d+/));

		// If user has enough scouts
		if (count > 0) {
			// Returns lowest value
			rallyPointForm.spy.value = Math.min(scouts, count);
		}
	}

	// For each unit, determine what to send.
	for (var unit in units) {
		// Simple error checking
		if (units.hasOwnProperty(unit)) {
			// Check if unit exists and only sends if config is more than zero
			if ((units[unit] > 0) && (typeof(rallyPointForm[unit]) != "undefined")) {
				// Determine how many available units you have
				count = parseInt(rallyPointForm[unit].nextSibling.nextSibling.innerHTML.match(/\d+/));

				// Input values if you have enough units
				if (count > 0) {
					rallyPointForm[unit].value = Math.min(units[unit], count);

					// Send scouts and one set of troops, or fill out whole units. Determined by config.
					if (!(config.useAllUnits)) {
						break;
					}
				}
			}
		}
	}
}

// Check to see if script is being run from the rally point. If yes, start.
if (document.URL.indexOf("screen=place") === -1) {
	UI.ErrorMessage("This has to be run from the rally point.", 3000);
} else {
	init();
}
