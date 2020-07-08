var a = [];
var total = "";


function carrito() {
	// body...
	
	a [0] = " Naruto $9.99 " + "<br>";
	var Num1=9.99
	total = Number(total) + Num1;


	
	document.getElementById("Pizarra").innerHTML=a;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + total;
}

function carrito2() {
	// body...
	
	a [1] = "Steins Gate $9.99 "+ "<br>";
	var Num2= 9.99;
	total = total + Num2;




	
	document.getElementById("Pizarra").innerHTML=a;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + total;
}

function carrito3() {
	// body...
	
	a [2] = " Tower of God $9.99 "+ "<br>";
	var Num3= 9.99;
	total = total + Num3;

	
	document.getElementById("Pizarra").innerHTML=a;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + total;
}

function carrito4() {
	// body...
	
	a [3] = "My Hero Academia $9.99 " + "<br>";
	var Num4=9.99
	total = Number(total) + Num4;


	
	document.getElementById("Pizarra").innerHTML=a;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + total;
}


function carrito5() {
	// body...
	
	a [4] = "Bleach $9.99 " + "<br>";
	var Num5=9.99
	total = Number(total) + Num5;


	
	document.getElementById("Pizarra").innerHTML=a;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + total;
}

function carrito6() {
	// body...
	
	a [5] = "Akame ga Kill $9.99" + "<br>";
	var Num6=9.99
	total = Number(total) + Num6;


	
	document.getElementById("Pizarra").innerHTML=a;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + total;
}

var b = [];
var totalM = "";

function carrito7() {
	// body...
	
	b [0] = "Naruto1 $8.99" + "<br>";
	var Num7=8.99;
	totalM = Number(totalM) + Num7;


	
	document.getElementById("Pizarra").innerHTML=b;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + totalM;
}


function carrito8() {
	// body...
	
	b [1] = "Naruto2 $8.99" + "<br>";
	var Num8=8.99;
	totalM = totalM + Num8;


	
	document.getElementById("Pizarra").innerHTML=b;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + totalM;
}

function carrito9() {
	// body...
	
	b [2] = "Bleach $8.99" + "<br>";
	var Num9=8.99;
	totalM = totalM + Num9;


	
	document.getElementById("Pizarra").innerHTML=b;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + totalM;
}


function carrito10() {
	// body...
	
	b [3] = "Fairy Tail $8.99" + "<br>";
	var Num10=8.99;
	totalM = totalM + Num10;



	
	document.getElementById("Pizarra").innerHTML=b;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + totalM;
}

function carrito11() {
	// body...
	
	b [4] = "One Piece $8.99" + "<br>";
	var Num11=8.99;
	totalM = totalM + Num11;



	
	document.getElementById("Pizarra").innerHTML=b;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + totalM;
}

function carrito12() {
	// body...
	
	b [5] = "Attack on Titan $8.99" + "<br>";
	var Num12=8.99;
	totalM = totalM + Num12;



	
	document.getElementById("Pizarra").innerHTML=b;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + totalM;
}
 
 function carrito13() {
	// body...
	
	b [6] = "Hunter X Hunter $8.99" + "<br>";
	var Num13=8.99;
	totalM = totalM + Num13;
	


	
	document.getElementById("Pizarra").innerHTML=b;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + totalM;
}

 function carrito14() {
	// body...
	
	b [7] = "7 Deadly Sins $8.99" + "<br>";
	var Num14=8.99;
	totalM = totalM + Num14;



	
	document.getElementById("Pizarra").innerHTML=b;
	document.getElementById("Pizarra2").innerHTML="  El total a pagar es: $ " + totalM;
}


function scrollWin(x, y) {
  window.scrollBy(x, y);
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function BorrarCarrito(){

	document.getElementById("Pizarra").innerHTML ="";
	document.getElementById("Pizarra2").innerHTML ="";


}















