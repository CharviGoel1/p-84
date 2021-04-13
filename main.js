canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1 width= 120;
car1 height= 70;
car1 image="c1.png";
car1_x = 10;
car1_y = 10;

car2 width= 120;
car2 height= 70;
car2 image="c2.png";
car2_x = 10;
car2_y = 100;

background_img = "carRacing.jpg";
function add() {
	backgroundimgtag = new Image();
	backgroundimgtag.onload = uploadbackground;
	backgroundimgtag.src = background_Image;
	roverimgtag = new Image();
	roverimgtag.onload = uploadrover;
	roverimgtag.src = car1_image;
}

function uploadbackground() {
	ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
	ctx.drawImage(car2_imgtag, car2_x, car2_y, car1width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keypressed = e.keyCode;
	console.log(keypressed);
	if (keypressed == '38') {
		up();
		console.log("up");
	}
	if (keypressed == '40') {
		down();
		console.log("down");
	}
	if (keypressed == '37') {
		left();
		console.log("left");
	}
	if (keypressed == '39') {
		right();
		console.log("right");
	}
}

function my_keydown(e) {
	keypressed = e.keyCode;
	console.log(keypressed);
	if (keypressed == '87') {
		w();
		console.lcar1");
	}
	if (keypressed == '83') {
		s();
		console.log("s");
	}
	if (keypressed == '65') {
		a();
		console.log("a");
	}
	if (keypressed == '68') {
		d();
		console.log("d");
	}
}

function up() {
	if (car1_y >= 0) {
		car1_y = car1_y - 10;
		console.log("When up arrow is pressed x= " + car1_x + " | y= " + car1_y);
		uploadbackground();
		uploadcar1();

	}
}

function down() {
	if (car1_y <= 500) {
		car1_y = car1_y + 10;
		console.log("When down arrow is pressed x= " + car1_x + " | y= " + car1_y);
		uploadbackground();
		uploadcar1();

	}
}

function left() {
	if (car1_x >= 0) {
		car1_x = car1_x - 10;
		console.log("When left arrow is pressed x= " + car1_x + " | y= " + car1_y);
		uploadbackground();
		uploadcar1();

	}
}

function right() {
	if (car1_x <= 700) {
		car1_x = car1_x + 10;
		console.log("When right arrow is pressed x= " + car1_x + " | y= " + car1_y);
		uploadbackground();
		uploadcar1();

	}
}

function w2) {
	if (car2_y >= 0) {
		car2_y = car1_y - 10;
		console.log("When up arrow is pressed x= " + car2_x + " | y= " + car2_y);
		uploadbackground();
		uploadcar2();

	}
}

function s() {
	if (car2_y <= 500) {
		car2_y = car1_y + 10;
		console.log("When down arrow is pressed x= " + car2_x + " | y= " + car2_y);
		uploadbackground();
		uploadcar2();

	}
}

function a() {
	if (car2_x >= 0) {
		car2_x = car2_x - 10;
		console.log("When left arrow is pressed x= " + car2_x + " | y= " + car2_y);
		uploadbackground();
		uploadcar2();

	}
}

function d() {
	if (car2_x <= 700) {
		car2_x = car1_x + 10;
		console.log("When right arrow is pressed x= " + car2_x + " | y= " + car2_y);
		uploadbackground();
		uploadcar2();

	}
}
