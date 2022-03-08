/*
	let scrollbefore=0;
	let currentpos=window.scrollY;
	window.addEventListener('scroll',()=>{
		const scrollable=document.documentElement.scrollHeight -window.innerHeight;
		let currentpos=window.scrollY;
		if (scrollable==currentpos) {
			alert("you reached the bottom")
		}
		if (currentpos==0){
			alert("you reached the top")
		}
	});


*/
/*user input scroll*/
var slidePosition=1;
showSlides(slidePosition)
function plusSlides(n) {
  showSlides(slidePosition += n);
}
function showSlides(n) {
	
	let slides=document.querySelectorAll('.slides');
	if (n > slides.length) {slidePosition = 1}
	if (n < 1) {slidePosition = slides.length}
	for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[slidePosition-1].style.display = "block";
  }
}
/*Auto scroll*/
var slidePosition = 0;
window.onload=showSlidesAuto;

function showSlidesAuto() {
	
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  // Change image every 2 seconds
  setTimeout(showSlidesAuto, 5000);
}