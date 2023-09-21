$(document).ready(function () {
  $('#calculate-btn').click(function () {
    const initialInvestment = parseFloat($('#initial-investment').val());
    const revenue = parseFloat($('#revenue').val());
    const expenses = parseFloat($('#expenses').val());

    if (isNaN(initialInvestment) || isNaN(revenue) || isNaN(expenses)) {
      $('#roi-result').html('<p>Please enter valid numbers in all fields.</p>');
    } else {
      const roi =
        ((revenue - expenses - initialInvestment) / initialInvestment) * 100;

      $('#roi-result').html('<p>ROI: ' + roi.toFixed(2) + '%</p>');
    }
  });
});
