$(document).ready(function () {
  // Remove Content, but Still exists in DOM
  $('#h1').click(() => {
    $('h1').empty();
  });

  // Remove from the DOM
  $('#h1-remove').click(() => {
    $('h1').remove();
  });

  // Remove Attribute
  $('#h1-remove-att').click(() => {
    $('h1').removeAttr('name');
  });

  // Add Attribute
  $('#h1-add-att').click(() => {
    $('h1').attr('name', 'bernie');
  });
});
