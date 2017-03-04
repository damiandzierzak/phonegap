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

function checkConnection() {
    var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
 
    alert('Connection type: ' + states[networkState]);
}