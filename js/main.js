$(document).ready(function(){

  //parallax effect
  var scene = document.getElementById('hero');
  var parallax = new Parallax(scene);

  // Defining a function to set size for #hero
  // function fullscreen(){
  //   $('.hero, .hero__container').css({
  //     height: $(window).height(),
  //     width: $(window).height()
  //   });
  // }

  // if ( $(window).height() > 320 || $('.hero, .hero__container').width() < 820 ) {
  //   fullscreen();
  // }

  // // Window resize
  // $(window).resize(function() {
  //   if ( $(window).height() > 320 || $('.hero, .hero__container').width() < 820 ) {
  //     fullscreen();
  //   }
  // });
});
