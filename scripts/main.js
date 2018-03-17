var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = `Household Needs, for ${myName}`;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = `Household Needs, for ${storedName}`;
}

myButton.onclick = function() {
	setUserName();
}

// set the current values for each person
// set indexes for the array
var index-traci = 0;
var index-andrew = 1;
var index-aydan = 2;
var index-arthur = 3;
var index-household = 4;

// Create an array of names
var names = [];
names[index-traci] = 'Traci';
names[index-andrew] = 'Andrew';
names[index-aydan] = 'Aydan';
names[index-arthur] = 'Arthur';
names[index-household] = 'Household';

// This section will be to control the list items for each person.
// array structure is [person#1, person#2]
// then the sub arrays are ["Item Name", value, goal, completion-goal-date]
var items = [];
items[index-traci] = ['Available', 80, null, null, 'Dresses', 0, 100, null, 'Spring Coat', 0, 60, null];
items[index-andrew] = ['Available', 80, null, null, 'Haircut', 0, 30, null, 'Dress Shirts', 0, 40, null, 'Ties', 0, 30, null];
items[index-aydan] = ['Available', 0, null, null, 'Senior Trip 2019', 10, 200, null, 'Movie Ticket', 20, 60, null];
items[index-arthur] = ['Available', 125, null, null, 'Pants', 0, 40, null];
items[index-household] = ['Available', 100, null, null, 'Paint, LR', 0, 30, 4/7/2018, 'TV Mount', 0, 30, 3/1/2018];




// Andrew
var andrewAvailable = document.getElementById('andrew.available.value');
myAvailable.onclick = function() {
	myAvailable.textContent = '$20';
}