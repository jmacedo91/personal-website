// Debounce to Loadsh
debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// about animation
(function () {
  var i = 0;
  var txt = "Hello, I'm a Chemist, a Data Science student and I work as a Laboratory\
   Analyst at PróLab Biotechnology.";
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typed-text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  $(".about").click(function () {
    $("#typed-text").text("");
    i = 0;
    typeWriter();
  });
}());


// portfolio animation
$(document).ready(function () {
  $(".row").addClass("anime-start");
  $(".portfolio-title").addClass("anime-start");
});

(function () {

var $target = $(".anime"),
  offset = $(window).height() * .50;

function animeScroll() {
  var documentTop = $(document).scrollTop();
  $target.each(function () {
    var itemTop = $(this).offset().top; //distância entre o topo e o item
    if (documentTop > itemTop - offset) {
      $(this).addClass("anime-start");
    } else {
      $(this).removeClass("anime-start");
    }
  })
}

animeScroll();

$(document).scroll(debounce(function () {
  animeScroll();
  console.log('teste');
}, 200));
}());
