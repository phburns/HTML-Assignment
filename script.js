$(document).ready(function () {
  $('#toggle-home-image').click(function () {
    $('#home-image').toggle();
    if ($(this).text() === 'Show Image') {
      $(this).text('Close Image');
    } else {
      $(this).text('Show Image');
    }
  });

  $('#toggle-about-list').click(function () {
    $('#about-list').toggle();
    if ($(this).text() === 'Open List') {
      $(this).text('Close List');
    } else {
      $(this).text('Open List');
    }
  });

  $('#toggle-contact-table').click(function () {
    $('#contact-table').toggle();
    if ($(this).text() === 'Show Table') {
      $(this).text('Close Table');
    } else {
      $(this).text('Show Table');
    }
  });
});
