// паралакс
window.onload = function () {
  const parallax = document.querySelector('.parallax');

  if (parallax) {
    const content = document.querySelector('.parallax__container');
    const clouds = document.querySelector('.images-parallax__clouds');
    const mountains = document.querySelector('.images-parallax__mountains');
    const human = document.querySelector('.images-parallax__human');

    const forClouds = 40;
    const forMountains = 20;
    const forHuman = 10;

    const speed = 0.05;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed)
      positionY = positionY + (distY * speed)

      clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%)`;
      mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%)`;
      human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%)`;
      
      requestAnimationFrame(setMouseParallaxStyle)
    }

    setMouseParallaxStyle();

    parallax.addEventListener('mousemove', function (e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });

    let thresholdSets = [];
    for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }
    const callback = function (entries, observer) {
      const scrollTopProcent = window.scrollY / parallax.offsetHeight * 100;
      setParallaxItemsStyle(scrollTopProcent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets
    });
    observer.observe(document.querySelector('.content'));
    function setParallaxItemsStyle(scrollTopProcent){
      content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
      mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;
      human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
    }
  }
}
// паралакс при скролле

// таймер
function get_uptime() {
  var t1 = new Date("2023-05-28")
  var t2 = new Date()
  var dif = t1.getTime() - t2.getTime()

  seconds = Math.ceil(dif / 86400000);
  Seconds_Between_Dates = Math.abs(seconds);
  document.getElementById("seconds").innerHTML = Seconds_Between_Dates;
  setTimeout(get_uptime, 1000000);
}

get_uptime();

// изменение текста
function change_txt() {
  if (Seconds_Between_Dates % 10 == 1){
    document.getElementById("myspan").innerHTML="день!";
  }
  else if (Seconds_Between_Dates % 10 == 2){
    document.getElementById("myspan").innerHTML="дня!";
  }
  else if (Seconds_Between_Dates % 10 == 3){
    document.getElementById("myspan").innerHTML="дня!";
  }
  else if (Seconds_Between_Dates % 10 == 4){
    document.getElementById("myspan").innerHTML="дня!";
  }
  else {
    document.getElementById("myspan").innerHTML="дней!";
  }
}

change_txt();



// слайдер
var swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  crossFade: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
  change.target.classList.add('element-show');
  } else { 
    change.target.classList.remove('element-show');
  }
  });
}
  
  let options = {
  threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation')
  
  for (let elm of elements) {
  observer.observe(elm);
  }