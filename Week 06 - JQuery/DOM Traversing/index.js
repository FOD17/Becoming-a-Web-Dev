$(document).ready(function () {
  // Find Parent
  $('#find-parent').click(() => {
    $('#main').parent().addClass('highlight');
  });

  // Find All Parents
  $('#find-parents').click(() => {
    $('#child').parents().addClass('highlight');
  });

  // Find All Siblings
  $('#find-siblings').click(() => {
    $('#kid').siblings().addClass('highlight');
  });
});
