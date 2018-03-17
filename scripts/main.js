var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myVariable = 'Bob';
myVariable;

function multiply(num1,num2) {
	var result = num1 * num2;
	return result;
};

var myHTML = document.querySelector('html');
myHTML.onclick = function() {
	alert('Ouch! Stop poking me!');
};