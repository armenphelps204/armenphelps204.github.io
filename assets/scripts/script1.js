
// JS file for liturgical.html

// function for when heading 1 is pressed
function showCard1() {
	let card1 = document.getElementById("c1");
	if (card1.style.display === "flex") {
		card1.style.display = "none";
	} else {
		let card2 = document.getElementById("c2");
		card2.style.display = "none";
		card1.style.display = "flex";
	}
}

document.getElementById("i1").onclick = showCard1;




// function for when heading 2 is pressed
function showCard2() {
	let card2 = document.getElementById("c2");
	if (card2.style.display === "flex") {
		card2.style.display = "none";
	} else {
		let card1 = document.getElementById("c1");
		card1.style.display = "none";
		card2.style.display = "flex";
	}
}

document.getElementById("i2").onclick = showCard2;


