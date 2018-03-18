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
// then the sub arrays are ["Item Name", value, goal, completion-goal-date]
var items = [];
items[index_traci] = ['Available', 80, null, null, 'Dresses', 0, 100, null, 'Spring Coat', 0, 60, null];
items[index_andrew] = ['Available', 80, null, null, 'Haircut', 0, 30, null, 'Dress Shirts', 0, 40, null, 'Ties', 0, 30, null];
items[index_aydan] = ['Available', 0, null, null, 'Senior Trip 2019', 10, 200, null, 'Movie Ticket', 20, 60, null];
items[index_arthur] = ['Available', 125, null, null, 'Pants', 0, 40, null];
items[index_household] = ['Available', 100, null, null, 'Paint, LR', 0, 30, '2018-04-07', 'TV Mount', 0, 30, '2018-03-01'];


// Create the framework for the list items
document.write('document written!');