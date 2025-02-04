/*------------------------------------------
  = MUSIC
  -------------------------------------------*/
try {
  var music;
  var audioIsPlaying = true;
  
  window.addEventListener('load', function() {
    music = new Audio('music/musicfile.mp3');
    preloader();
  });

  var parent = document.getElementById("music-button");
  
  parent.addEventListener("click", function(e) {
    if (audioIsPlaying) {
      audioIsPlaying = false;
      music.pause();
    } else {
      audioIsPlaying = true;
      music.play();
    }
  });
  
  let lastKnownScrollPosition = 0;
  var scrollPlay = false
  
  document.addEventListener("scroll", (event) => {
  
    if (document.scrollY || document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      hidePrepage();
    }
    
    lastKnownScrollPosition = window.scrollY;
  
    if(lastKnownScrollPosition = 50 && !scrollPlay){
      if (audioIsPlaying) {
  
        audioIsPlaying = false;
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
          //This is an iOS device.
          document.getElementById("my_audio").pause();
        } else {
          //This is not an iOS device!
          music.pause();
        }
      } 
      else {
        audioIsPlaying = true;
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
          //"This is an iOS device.
        document.getElementById("my_audio").play();
        } else {
          //This is not an iOS device!
          music.play();
        }
  
      }
      scrollPlay = true;
    }
  });

  function playMusic(){

    if (audioIsPlaying) {
      audioIsPlaying = false;
      music.pause();
    } else {
      audioIsPlaying = true;
      music.play();
    }
  }

} catch {}

/*------------------------------------------
  = APPEAR ANIMATIONS
  -------------------------------------------*/
try {
var count = 0;

const observerEvent = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('animate-appear', 'pop');
          count = count + 1;
          return;
        }
  
      // We're not intersecting, so remove the class!
      //entry.target.classList.remove('animate-appear');
    });
  });
  
  observerEvent.observe(document.querySelector('.event'));

  const observerEvent2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('animate-appear', 'pop');
          return;
        }
  
      // We're not intersecting, so remove the class!
      //entry.target.classList.remove('animate-appear');
    });
  });
  
  observerEvent2.observe(document.querySelector('.event2'));

  const observerCountDown = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('animate-appear', 'pop');
          return;
        }
  
      // We're not intersecting, so remove the class!
      //entry.target.classList.remove('animate-appear');
    });
  });
  
  observerCountDown.observe(document.querySelector('.count-down-elements'));

  const observerMatchElemens = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('animate-appear', 'pop');
          return;
        }
  
      // We're not intersecting, so remove the class!
      //entry.target.classList.remove('animate-appear');
    });
  });
  
  observerMatchElemens.observe(document.querySelector('.mw-match-elements'));

} catch {}

/*------------------------------------------
  = PRELOADER AND ENVELOPE FADE
  -------------------------------------------*/
try {
  var pre = document.getElementById("pre_page");
  
  function hidePrepage() {
    pre.setAttribute("style", "display:none;");
    
    var wPage = document.getElementById("home");
    wPage.setAttribute("style", "height: auto;overflow-x: hidden;overflow-y: auto;");
    var mPage = document.getElementById("main_page");
    mPage.setAttribute("style", "height: auto;overflow-x: hidden;overflow-y: auto;");
  
    if($(".save-the-date").length) {
        popupSaveTheDateCircle();
    }
  
    //Active heor slider
    heroSlider();
  }
  
  function fadeOutWelcomeElements(){
    /*var leftG = document.getElementById("left_graph");
    var leftR = document.getElementById("right_graph");*/
    var innerE = document.getElementById("inner_elements");
    var envTop = document.getElementById("env_top");
    var envMiddle = document.getElementById("env_middle");
    var envBottom = document.getElementById("env_bottom");
  
    /*leftG.classList.add("fade-out");
    leftR.classList.add("fade-out");*/
    innerE.classList.add("fade-out");
    envTop.classList.add("fade-out");
    envMiddle.classList.add("fade-out");
    envBottom.classList.add("fade-out");
    pre.classList.add("fade-out");
  
    setTimeout(hidePrepage,2000);
  };    
  
  /* Hide preloader */
  function preloader() {
  if($('.preloader').length) {
      $('.preloader').delay(100).fadeOut(500, function() {
  
          if($(".save-the-date").length) {
              popupSaveTheDateCircle();
          }
  
          //Active heor slider
          heroSlider();
  
      });
  }
  }
  
  function popupSaveTheDateCircle() {
    var saveTheDateCircle = $(".save-the-date");
    saveTheDateCircle.addClass("popup-save-the-date");
  }
  
  //Setting hero slider
  function heroSlider() {
      if ($(".hero-slider").length) {
          $(".hero-slider").slick({
              arrows: true,
              prevArrow: '<button type="button" class="slick-prev">Previous</button>',
              nextArrow: '<button type="button" class="slick-next">Next</button>',
              dots: true,
              fade: true,
              cssEase: 'linear'
          });
      }
  }
}catch {}
