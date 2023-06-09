const sliderWrap = document.createElement("div");
sliderWrap.classList.add("sliderWrap");
main.appendChild(sliderWrap);

const slideshowContainer = document.createElement("div");
slideshowContainer.classList.add("slideshowContainer");
sliderWrap.appendChild(slideshowContainer);

const mySlidesFade = `
<div class="mySlides fade">
<div class="numbertext">1 / 3</div>
<img src="./image/logo.png" style="width:100%">
<div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
<div class="numbertext">2 / 3</div>
<img src="../image/logo.png" style="width:100%">
<div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
<div class="numbertext">3 / 3</div>
<img src="img3.jpg" style="width:100%">
<div class="text">Caption Three</div>
</div>


<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>

`;

slideshowContainer.innerHTML = mySlidesFade;

const circles = document.createElement("div");
circles.classList.add("circles");
slideshowContainer.appendChild(circles);

circles = `
<span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
`;

slideshowContainer.innerHTML = circles;

// const circles = `
// <div style="text-align:center">
//   <span class="dot" onclick="currentSlide(1)"></span>
//   <span class="dot" onclick="currentSlide(2)"></span>
//   <span class="dot" onclick="currentSlide(3)"></span>
// </div>
// `;

// mySlidesFade.innerHTML = circles;
