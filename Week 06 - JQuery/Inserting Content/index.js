$(document).ready(function () {
  // Add Text
  $('#h1').click(() => {
    $('#main').append('This is new...');
  });

  // Add Content: adds to inside of the element (nested)
  $('#h1-content').click(() => {
    let heading = '<h1>Added Text:</h1>';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = '<em>I am ready for six figures!</em>';
    $('body').append(heading, paragraph);
  });

  // Add Content Before
  $('#h1-content-before').click(() => {
    let heading = '<h1>Added Text:</h1>';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = '<em>I am ready for six figures!</em>';
    $('#main').before(heading, paragraph);
  });

  // Add Content After
  $('#h1-content-after').click(() => {
    let heading = '<h1>Added Text:</h1>';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = '<em>I am ready for six figures!</em>';
    $('#main').after(heading, paragraph);
  });
});
