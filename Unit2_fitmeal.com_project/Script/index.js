var item = 1;

function prev() {
  var items = document.querySelectorAll("#items > div");
  if (item == 1) {
    item = items.length;
  } else {
    item--;
  }
  showItem();
}

function next() {
  var items = document.querySelectorAll("#items > div");
  if(item == items.length) {
    item = 1
  } else {
    item++
  }
  showItem();
}

function showItem() {
  var items = document.querySelectorAll("#items > div");
  for (var i = 0; i < items.length; i++) {
    if (i + 1 == item) {
      items[i].style.display = "block"
    } else {
      items[i].style.display = "none";
    }
  }
}

showItem();


document.querySelector("#downloadBtn").addEventListener("click",function() {
  window.location.href="https://play.google.com/store/apps/details?id=com.zoconut.fitmeals&hl=en&gl=US";
})


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


