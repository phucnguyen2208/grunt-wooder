
document.querySelector('.btmenu').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('active');
    this.classList.toggle('clicked');
});

// language

let lang_text = document.querySelector('.lang__text');
let lang_text_p = lang_text.querySelector('p');
let lang_list = document.querySelector('.header__lang--list');
lang_text.addEventListener('click', function (e) {
    e.stopPropagation();
    lang_list.classList.toggle('showdown');
    console.log('lang_text');
});

lang_list.querySelectorAll('a').forEach(e => {
    e.addEventListener('click', function (e) {
        e.preventDefault();
        let text = this.innerText;
        lang_text_p.innerText = text;
    })
});

let body = document.body;
body.addEventListener('click', function () {
    lang_list.classList.remove('showdown');
    console.log('body');
});



// back to top

var backTop = document.querySelector('.backtop');
backTop.addEventListener('click', function () {
    window.scrollBy({
        top: -document.body.offsetHeight,
        behavior: 'smooth'
    });
});

// var backToTop = document.querySelector('.back-to-top');
// backToTop.addEventListener('click',function() {
//     this.style.display = 'none';
//     window.scrollBy({
//         top : -document.body.offsetHeight,
//         behavior : 'smooth'
//     });
// });

// window.addEventListener('scroll',function() {
//     if (document.documentElement.scrollTop > 300) {
//         backToTop.style.display = 'block';
//     }
//     else {
//         backToTop.style.display = 'none';
//     }
// });



// tab
let tabTitle = document.querySelectorAll('.tab-title a');
tabTitle.forEach((ele, index) => {
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.tab-title .active').classList.remove('active')
        ele.classList.add('active');

        let content = document.querySelectorAll('.tab-content > *')[index]
        let c = document.querySelector('.tab-content .active');
        c.classList.remove('active')
        c.style.display = 'none'
        content.classList.add('active');
        content.style.display = 'block';

    })
});



// video model

let video_model = document.querySelector('.videos-model');
let video = document.querySelector('.videos-model iframe');

document.querySelectorAll('.video__btn').forEach(function (e) {
    e.addEventListener('click', function () {
        let video_ID = this.getAttribute('data-id');
        video.setAttribute('src', 'https://www.youtube.com/embed/' + video_ID)
        video_model.style.display = 'flex';
    });
});

document.querySelector('.videos-model .close').addEventListener('click', function () {
    video_model.style.display = 'none';
    video.src = '';
});



// slider

// let sliderItems = document.querySelectorAll('.slider .item');
// let sliderNumber = document.querySelector('.slider .number');
// let dotted = document.querySelector('.slider .slide ul');
// let currentIndex = 0;

// document.querySelector('.slider .prev').addEventListener('click', function () {
    
//     if( currentIndex == 0 ){
//         let slideCurrent = sliderItems[currentIndex];
//         let slideNext = sliderItems[sliderItems.length - 1];

//         slideNext.classList.add('fadeIn');
//         slideCurrent.classList.remove('fadeIn');

//         dottedLi[currentIndex].classList.remove('active');
//         dottedLi[sliderItems.length - 1].classList.add('active');

//         currentIndex = sliderItems.length - 1;

//         sliderNumber.innerText = (currentIndex + 1).toString().padStart(2, '0');
//     }else{
//         let slideNext = sliderItems[currentIndex - 1];
//         let slideCurrent = sliderItems[currentIndex];

//         slideNext.classList.add('fadeIn');
//         slideCurrent.classList.remove('fadeIn');

//         dottedLi[currentIndex].classList.remove('active');
//         dottedLi[currentIndex - 1].classList.add('active');

//         currentIndex--;
//         sliderNumber.innerText = (currentIndex + 1).toString().padStart(2, '0');
//     }
// });


// document.querySelector('.slider .next').addEventListener('click', function () {

//     let slideNext = sliderItems[currentIndex + 1];
//     let slideCurrent = sliderItems[currentIndex];

//     slideNext.classList.add('fadeIn');
//     slideCurrent.classList.remove('fadeIn');

//     dottedLi[currentIndex].classList.remove('active');
//     dottedLi[currentIndex + 1].classList.add('active');

//     currentIndex++;
//     sliderNumber.innerText = (currentIndex + 1).toString().padStart(2, '0');

// });


// sliderItems.forEach((e, i) => {
//     let li = document.createElement('LI');
//     if (i == 0) {
//         li.classList.add('active');
//     }
//     dotted.appendChild(li);
// });

// let dottedLi = dotted.querySelectorAll('li');


// dottedLi.forEach(function (e, i) {
//     e.addEventListener('click', function () {
//         let slideCurrent = sliderItems[currentIndex];
//         let slideTo = sliderItems[i];

//         slideTo.classList.add('fadeIn');
//         slideCurrent.classList.remove('fadeIn');

//         dottedLi[currentIndex].classList.remove('active');
//         dottedLi[i].classList.add('active');

//         currentIndex = i;
//         sliderNumber.innerText = (currentIndex + 1).toString().padStart(2, '0');

//     })
// });



// DropDown Menu

$(document).ready(function() {  
    $('ul li').on('click',function(e) {
        e.preventDefault();
        $('ul ul').stop().slideUp();
        $(this).find('ul').stop().slideToggle();
    })
    
});


$(document).ready(function() {
    $('.default_option').on('click',function() {
        $(this).parent().toggleClass('active');
    });
    $(".select_ul li").click(function(){
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
    });
});




$('.slider__wrap').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false
  });