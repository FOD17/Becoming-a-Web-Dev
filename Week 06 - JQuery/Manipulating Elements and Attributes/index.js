$(document).ready(function () {
  // remove content, but still exists in DOM
  $('#h1').click(() => {
    $('h1').empty();
  });

  // remove entirely
  $('#h1-remove').click(() => {
    $('h1').remove();
  });

  // remove entirely
  $('#h1-remove-att').click(() => {
    $('h1').removeAttr('name');
  });
});
