function multiply(num1,num2) {
	var result = num1 * num2;
	return result;
};

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/traci-arthur.jpg') {
		myImage.setAttribute ('src','images/wildsiders.png');
	} else {
		myImage.setAttribute ('src','images/traci-arthur.jpg');
	}
}

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

var myAvailable = document.getElementById('Andrew.Available.value');
myAvailable.onclick = function() {
	myAvailable.textContent = '$20';
}