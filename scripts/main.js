/* Andrew Henning-Kolberg
   andrew.kolberg@gmail.com
   2018
   
*/

// set the current values for each person
// set indexes for the array
var index_traci = 0;
var index_andrew = 1;
var index_aydan = 2;
var index_arthur = 3;
var index_household = 4;

// Create an array of names
var names = [];
names[index_traci] = 'Traci';
names[index_andrew] = 'Andrew';
names[index_aydan] = 'Aydan';
names[index_arthur] = 'Arthur';
names[index_household] = 'Household';

// This section will be to control the list items for each person.
// array structure is [person#1, person#2]
// then the sub arrays are [["Item Name", value, goal, completion-goal-date], ]
var index_itemName = 0;
var index_value = 1;
var index_goal = 2;
var index_completionDate = 3;

// Structure: 
// items[name][item and data][element]
var items = [];
items[index_traci] = [['Available', 20, 80, null], ['Dresses', 10, 100, null], ['Spring Coat', 50, 60, null]];
items[index_andrew] = [['Available', 80, null, null], ['Haircut', 0, 30, null], ['Dress Shirts', 0, 40, null], ['Ties', 0, 30, null]];
items[index_aydan] = [['Available', 0, null, null], ['Senior Trip 2019', 10, 200, null], ['Movie Ticket', 20, 60, null]];
items[index_arthur] = [['Available', 125, null, null], ['Pants', 0, 40, null]];
items[index_household] = [['Available', 100, null, null], ['Paint, LR', 0, 30, '2018-04-07'], ['TV Mount', 0, 30, '2018-03-01']];


/* this is really just the template.
// Create the framework for the list items
newListStructure += '<p>'
newListStructure += '<p class="name">Traci</p>'
newListStructure += '<ol>'
newListStructure += '<li class="available" id="Traci.Available">Available $10</li>'
newListStructure += '<li>Spring Coat ($50)</li>'
newListStructure += '</ol>'
newListStructure += '</p>'
*/


var newList = document.getElementById('lists');
// var changeNameButton;

function updateDisplay() {
	// if the button's name has changed, update it.
	// Loop through each button.
	// How is a particular button attached to the stuff?
	// Would it be better with 'id's or perhaps a single array? no that would be hard to insert...
	var allVariableButtons = document.getElementsByClassName('variableButton')
	for (b of allVariableButtons) {
		
		b.innerHTML = items[i][j][k % 3]
	
	
	
	document.getElementsByName(this.name)[0].innerHTML = newName;
	document.getElementsByName(this.name)[0].innerHTML = '($' + newGoal + ')';
	document.getElementsByName(this.name)[0].innerHTML = '$' + newValue;
}

function changeName() {
	// prompts the user for a new item name. (Blank to delete it?)
	var newName = prompt('What would you like to rename this item?\n\nBlank to delete it.');

	// Get the element by name, and change it's text to the newly entered stuff
	updateDisplay();
}

function changeGoal() {
	// prompts the user for a new item goal amount.
	var newGoal = prompt('How much do you want to save for this goal?');
	
	// Get the element by name, and change it's text to the newly entered stuff
	updateDisplay();
}

function changeValue() {
	// prompts the user for a new amount saved.
	var newValue = prompt('How much are you saving toward this goal?');
	
	// Validate that the new value amount is available, 
	// and adjust the amount 
	
	// Get the element by name, and change it's text to the newly entered stuff
	updateDisplay();
}

var newListStructure = '';
newListStructure = '';
// Loop through the frameworks
for (var i = 0; i < names.length; i++) {
	newListStructure += '<p>';
	newListStructure += `<p class='name'>${names[i]}</p>`;
	newListStructure += '<ol>';
	// Create the list items
	for (var j = 0; j < items[i].length; j++) {
		newListStructure += '<li>';
		// Write a button that contains the code it needs to call
		// the correct function to move the indexes up or down.
		// Or whatever function makes sense.
		newListStructure += `<button class='variableButton' name='buttonName${names[i]}${j}'>${items[i][j][index_itemName]}</button> `;
		if (items[i][j][index_goal]) {
			// there is a goal, so print it.
			newListStructure += `<button class='variableButton' name='buttonGoal${names[i]}${j}'>($${items[i][j][index_goal]})</button>`;
		}
		newListStructure += `: <button class='variableButton' name='buttonValue${names[i]}${j}'>$${items[i][j][index_value]}</button></li>`;
			
	}
	// Add the list footer
	newListStructure += '</ol>';
	newListStructure += '</p>';
}

//Actually create the code
newList.innerHTML = newListStructure;


// Loop through all the buttons again to add the function.
for (var i = 0; i < names.length; i++) {
	for (var j = 0; j < items[i].length; j++) {
		try {
			var thisButton = document.getElementsByName(`buttonName${names[i]}${j}`)[0]
			thisButton.onclick = changeName;
		}
		catch(err) {
			console.log(`Can't find buttonName${names[i]}${j}`);
		}
		try {
			var thisButton = document.getElementsByName(`buttonGoal${names[i]}${j}`)[0]
			thisButton.onclick = changeGoal;
		}
		catch(err) {
			console.log(`Can't find buttonGoal${names[i]}${j}`);
		}
		try {
			var thisButton = document.getElementsByName(`buttonValue${names[i]}${j}`)[0]
			thisButton.onclick = changeValue;
		}
		
		catch(err) {
			console.log(`Can't find buttonValue${names[i]}${j}`);
		}
	}
}
	
	
// Indicates no errors above this.
document.write('Script was successful to the end.');