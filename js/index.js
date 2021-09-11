

var slideIndex = 1;
//showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}


/*************/

let index = 1;

//divs(index);
function callSlide(w) {
  divs(index += w);
}
function divs (w) {
  let j = document.getElementsByClassName("myWorkSlides");
  if(w > j.length) {
    index = 1;
  }
  if(w < 1) {
    index = j.length;
  }
  for (let y = 0; y < j.length; y++) {
    j[y].style.display = "none";
  }
  j[index-1].style.display = "block";
}
