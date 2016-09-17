const container = document.querySelector('.container');
const color = document.querySelector('.color');
let x, y, hex, rand;
const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];

container.addEventListener('mousemove', function(e) {
	x = e.clientX.toString();
	y = e.clientY.toString();
	hex = x + y;

	if(hex.length > 6) {
		hex = hex.substring(0, 6);
	} else if (hex.length < 6) {
		while(hex.length < 6) {
			rand = values[Math.floor(Math.random()*values.length)];
			hex = hex + rand;
		}
	} else {
		hex = hex;
	}

	container.style.background = '#' + hex;
	color.innerHTML = '#' + hex;
});
