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

