$(document).ready(function () {
  $('#joke-button').click(function () {
    $('h1').append = 'poop';
    // Making the API Call
    $.getJSON('https://api.chucknorris.io/jokes/random', function (data) {
      console.log(data.value);
      $('#joke-area').text(data.value);
    });
  });
});
