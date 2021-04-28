
// JS file for about.html

// function for closing all text cards
function hideCards() {
	let cards = document.getElementsByClassName("text");
	for (var i = 0; i < cards.length; i++) {
		cards[i].style.display = "none";
	}
}



// function for when heading 1 is pressed
function showCard1() {
	let card1 = document.getElementById("c1");
	if (card1.style.display === "flex") {
		card1.style.display = "none";
	} else {
		hideCards();
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
		hideCards();
		card2.style.display = "flex";
	}
}

document.getElementById("i2").onclick = showCard2;




// function for when heading 3 is pressed
function showCard3() {
	let card3 = document.getElementById("c3");
	if (card3.style.display === "flex") {
		card3.style.display = "none";
	} else {
		hideCards();
		card3.style.display = "flex";
	}
}

document.getElementById("i3").onclick = showCard3;




// function for when heading 4 is pressed
function showCard4() {
	let card4 = document.getElementById("c4");
	if (card4.style.display === "flex") {
		card4.style.display = "none";
	} else {
		hideCards();
		card4.style.display = "flex";
	}
}

document.getElementById("i4").onclick = showCard4;

