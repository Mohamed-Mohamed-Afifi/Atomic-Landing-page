
/* Scrolled Navbar */
window.addEventListener('scroll',function(){
  let header=document.querySelector('nav');
  header.classList.toggle('active-nav',window.scrollY >70);
})
/* Slick slider */
$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/* Slick single move */
$('.cli-slide').slick({
  autoplay: true,
  dots: true,
  speed: 700,
});
/* Mouse Hover and left (Not used)*/
 let hov=function(){
  $(".contacts").css({
    transition:'.35s',
    visibility: 'visible',
    transform: 'translatex(2rem)',
  });
};
let hovOut=function(){
  $(".contacts").css({
    transition:'.6s',
    transform: 'translatex(-2rem)',
    visibility: 'hidden',
  });
}; 
/* translate up and down */
let hovUP=function(){
  $(".y-trans").css({
    transition:'.6s',
    transform: 'translatey(-2rem)',
  });
};
let hovDown=function(){
  $(".y-trans").css({
    transition:'.8s',
    transform: 'translatey(0)',
  });
}; 
let links=document.querySelectorAll(".navbar-collapse .nav-pills a")
let up=document.querySelector('.scroll-up')
up.style.transform = "scale(0)";
/* Up Button Control */
window.addEventListener('scroll',()=>{
  if(window.scrollY>150){
    up.style.transform = "scale(1)";
  }else{
    up.style.transform = "scale(0)";
  }
})
/* Go to Top of page */
up.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})
// let upArrow=dovcument.querySelector('.scroll-up .fa')
/* Active nav links while scrolling */
window.addEventListener('scroll',()=>{
  links.forEach(el=>{
    let currentP=document.documentElement.scrollTop//Get the current scrollbar position

    let sectionArr=document.querySelector(`[data-link=${el.getAttribute('href').slice(1).trim()}]`)//Get all page sections

    let startSection=sectionArr.offsetTop-100//Calculate the head of section

    let endSection=startSection + sectionArr.offsetHeight;//Calculate the end of the section

    let currentLink=document.querySelector(`.nav-link[href="#${sectionArr.getAttribute('data-link')}"]`);

    if((currentP>=startSection && currentP<= endSection+50))
    {
    currentLink.classList.add('active')
    }
    else
    {
    currentLink.classList.remove('active')
    }
  })
})

links.forEach(el=>{
  el.addEventListener('click',()=>{
    let scrollElement=document.querySelector(`[data-link=${el.getAttribute('href').slice(1).trim()}]`)
    let sectionTop=scrollElement.offsetTop;
    window.scrollTo({
      left:0,
      top:sectionTop-40,
      behavior:"smooth"
    })
    // document.documentElement.scrollTop=scrollElement.offsetTop-40;
  })
})


/* After Loading  */
let divLoad=document.querySelector('.loading')
let proton=document.querySelector('.atom')
window.addEventListener('load',()=>{
  divLoad.style.display="none";
  document.body.style.overflow="auto";
  proton.style.display="none"
})
/* slider scrolling */
// let slideBtn=document.querySelector('.chg')
// slideBtn.addEventListener('click',()=>{
let touchedSlides=document.querySelectorAll('.blog .row > div')
  
  touchedSlides.forEach((el,index)=>{
    // console.log(el)
      let slideimg=el.querySelector('img')
      console.log(slideimg)
      slideimg.addEventListener("dragstart",(e)=>e.preventDefault())
      el.addEventListener("touchstart",(event)=>{
        console.log(event)
      })
      el.addEventListener("touchend",(event)=>{
        console.log(event)
      })
      el.addEventListener("touchmove",(event)=>{
        console.log(event)
      })
  })
// })
// let arrObj=[
//   {
//     'name':"ana",
//     'age':25,
//     "email":"mohamed@gmail.com"
//   }
//   ,
//   {
//     'name':"mo",
//     'age':30,
//     "email":"mohamed@gmail.com"
//   }
//   ,
//   {
//     'name':"afif",
//     'age':40,
//     "email":"mohamefd@gmail.com"
//   }
//   ,
//   {
//     'name':"fetho",
//     'age':25,
//     "email":"mohamed@gmail.com"
//   }
// ]
// let reObj=arrObj.reduce((acc,cur)=>`${acc['name']}${ cur['name'] }`)
// console.log(reObj)
// let mapData="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLMTdZ61eBnyqzVhegrlKy38Zwzky-eugX&key=AIzaSyCyxOc53z1eZKJ6xmDID5-uS6vu6kIdEwE";
// fetch(mapData).then(response=>{return response.json()}).then(data=>{
//   console.log(data.items[0])
//   passData(data.items)
// }).catch(error=>{
//   console.log(error)
// })
// function passData(data){
//   data.forEach(el=>{
//     let title=el.snippet.title;
//     let img=el.snippet.thumbnails.high;
//     console.log(img)
//   })
// }
// let d={name:"mohanmed",age:25}
// fetch("/database/home.php",{
//   method:'POST',
//   credentials:'same-origin',
//   body:JSON.stringify(d),
//   headers:d
// }).then(response=>response.json()).then(data=>{
//   console.log(data)
// }).catch(error=>{
//   console.log(error)
// })
