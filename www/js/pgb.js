function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}


function pesonalData() {
	data = 'Name and Surname: Damian Dzierzak\n' +
		'Email: damiandzierzak92@gmail.com\n' +
		'Website: damian.com\n' +
		'Group number: hfhrwu23r834\n' +
		'Field of study: IT';
	navigator.notification.alert(data);
}