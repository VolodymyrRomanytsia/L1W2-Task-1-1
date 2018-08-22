const rev = () => {
	cont.classList.toggle('revers');
	uah.value = 'null';
	usd.value = 'null';
}
const button = document.querySelector('.button');
const cont = document.querySelector('.container');
button.addEventListener('click', rev); 


function exchange() {
	const exchangeRate = 26;
	const ua = document.getElementById('uah').value;
	const us = document.getElementById('usd').value;
	if (ua != 0 && us != 0) {
		ua = 'null';
		us = 'null';
	} else if (ua > 0) {
		document.getElementById('usd').value = ua / exchangeRate;
		document.getElementById('uah').value = ua;
	} else if (us > 0) {	
		document.getElementById('uah').value = us * exchangeRate;
		document.getElementById('usd').value = us;
	} 
}

