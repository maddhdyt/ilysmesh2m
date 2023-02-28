let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('back-mountain');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('front-mountain');
// const btnOpen = document.querySelector('.btn-open');
// const openScreen = document.querySelector(".open-screen");
const cover = document.getElementsByClassName('cover')


window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
})

// btnOpen.addEventListener("click", function(){
//     openScreen.classList.add("fade")
// })

for (let i = 0; i < cover.length; i++) {
    const covers = cover[i];
    covers.addEventListener("click", function(){
      covers.classList.toggle("active")
    })
  }
