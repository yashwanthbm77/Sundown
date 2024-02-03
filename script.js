function mouse(){
   var elemC = document.querySelector("#elemcontainer")
var fixed = document.querySelector(".fixed-img-pg3")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display='block'
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display='none'
})

var elem = document.querySelectorAll('.elems')
elem.forEach(function(e){
    e.addEventListener('mouseenter',function(){
        var image = e.getAttribute('data-image')
        console.log(image)
        fixed.style.backgroundImage=`url(${image})`
    })
})
}

function swiperp4(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.2,
        centeredSlides: true,
        spaceBetween: 50,
        mousewheel: true,
        keyboard: true,
        cssMode: true,
       
      });
    }

swiperp4();
mouse();
