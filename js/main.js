//  Header Section
var className = "changecolor";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};
    // Modal mobile

// Tạo một biến hằng số lưu vào cái icon bar
const mobileBtn = document.querySelector ('.js-mobile-menu')
// Tạo một biến hằng số vào Modal
const modal = document.querySelector ('.js-modal')
// Tạo một biến hằng số vào nút close
const modalClose = document.querySelector ('.js-modal-close')
// Tạo một sự kiện lắng nghe click vào icon bar
mobileBtn.addEventListener('click', showMenumobile)
// Tạo một sự kiện lắng nghe click vào nút close
modalClose.addEventListener('click', hideMenumobile)
// Tạo một biến khi click vào icon bar thì hiện lên modal vừa tạo
function showMenumobile () {
    modal.classList.add('open')
}

// Tạo một biến khi click vào nút close thì ẩn đi modal vừa tạo
function hideMenumobile () {
    modal.classList.remove('open')
}

// Phần click vào khoảng không nó sẽ tự đóng
modal.addEventListener('click', hideMenumobile)

// Phần ngăn chặn hiệu ứng nổi bọt khi ấn vào modal
const modalContainer = document.querySelector('.js-modal-container')
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})


// Slider
 //khai báo biến slideIndex đại diện cho slide hiện tại
 var slideIndex;
 // KHai bào hàm hiển thị slide
 function showSlides() {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" actives", "");
     }

     slides[slideIndex].style.display = "block";  
     dots[slideIndex].className += " actives";
     //chuyển đến slide tiếp theo
     slideIndex++;
     //nếu đang ở slide cuối cùng thì chuyển về slide đầu
     if (slideIndex > slides.length - 1) {
       slideIndex = 0
     }    
     //tự động chuyển đổi slide sau 5s
     setTimeout(showSlides, 5000);
 }
 //mặc định hiển thị slide đầu tiên 
 showSlides(slideIndex = 0);


 function currentSlide(n) {
   showSlides(slideIndex = n);
 }


//  Product List Modal

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});


// Light Box

/**
 * 
 */

    const images = document.querySelectorAll(".tab-pane img");
    images.forEach(item => item.addEventListener("click", handleZoomImage));
    function handleZoomImage (event) {
      const image = event.target.getAttribute("src");
      const template = `
      <div class="lightbox">
      <div class="lightbox-content">
      <i class="fa-solid fa-angle-left lightbox-prev"></i>
            <img src="${image}" class="lightbox-image">
      <i class="fa-solid fa-angle-right lightbox-next"></i>
            </div>
            </div>`
      document.body.insertAdjacentHTML("beforeend", template);
    }

    let index = 0;
    
      document.body.addEventListener("click", function(e) {
        const lightImage = document.querySelector(".lightbox-image");
        let lightSrc = "";
        if (e.target.matches(".lightbox")) {
          // remove lightbox out of dom
          e.target.parentNode.removeChild(e.target);
        } else if (e.target.matches(".lightbox-next")) {
          lightSrc = lightImage.getAttribute("src")
          index = [...images].findIndex(item => item.getAttribute("src") === lightSrc);
          index = index + 1;
          if (index > images.length - 1) {
            index = 0;
          }
          const newSrc = [...images][index].getAttribute("src");
          lightImage.setAttribute("src", newSrc);

        } else if (e.target.matches(".lightbox-prev")) {
          lightSrc = lightImage.getAttribute("src")
          index = [...images].findIndex(item => item.getAttribute("src") === lightSrc);
          index = index - 1;
          if (index < 0) {
            index = images.length - 1
          }
          const newSrc = [...images][index].getAttribute("src");
          lightImage.setAttribute("src", newSrc);
        }
      })