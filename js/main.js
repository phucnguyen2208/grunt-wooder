
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



// Slider

$('.slider__wrap').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround : true,
    prevNextButtons: false,
    // autoPlay : 3000,
    on : {
        ready : function() {
            let dotted = $('.flickity-page-dots');
            paging = $('.slider__controll .dotted');
            dotted.appendTo(paging);
        },
        change : function(index) {
            let number = $('.slider__controll .slide .number');
            let PageNumber = index + 1;
            number.text(PageNumber.toString().padStart(2,0));
        }
    }
});

let $carousel = $('.slider__wrap');

// prev 
$('.controll .prev').on('click',function() {
    $carousel.flickity('previous',true);
});

//next
$('.controll .next').on('click',function() {
    $carousel.flickity('next',true);
});



// GALLERY


var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0];
            console.log();
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            showAnimationDuration : 0,
            hideAnimationDuration : 0
        };
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if( isNaN(options.index) ) {
            return;
        }
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

$(window).on('load',function () {
    initPhotoSwipeFromDOM('.carousel-img');
});

$('.section-gallery a').on('click',function(e){
    e.preventDefault();
})