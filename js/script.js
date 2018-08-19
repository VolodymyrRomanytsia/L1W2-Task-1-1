const button = document.querySelector('.button');
const cont = document.querySelector('.container');
button.onclick = function(){
	cont.classList.toggle('revers');
	uah.value = 'null';
	usd.value = 'null';
}

function exchange() {
	const exchangeRate = 26;
	let ua = document.getElementById('uah').value;
	let us = document.getElementById('usd').value;
	if (uah.value.length > 0 && usd.value.length > 0) {
		uah.value = 'null';
		usd.value = 'null';
	} else if (uah.value.length > 0) {
		document.getElementById('usd').value = ua / exchangeRate;
		document.getElementById('uah').value = ua;
	} else if (usd.value.length > 0) {	
		document.getElementById('uah').value = us * exchangeRate;
		document.getElementById('usd').value = us;
	} 
}

