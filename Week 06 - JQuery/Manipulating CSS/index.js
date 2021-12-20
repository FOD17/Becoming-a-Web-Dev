$(document).ready(function () {
  // change class
  $('#h1').click(() => {
    //$('h1').addClass('make-big');

    // toggle class
    $('h1').toggleClass('make-big');
  });

  // remove class
  $('#h1-remove').click(() => {
    $('h1').removeClass('make-big');
  });
});
