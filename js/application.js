var sum = function (acc, x) { return acc + x; };

var updateTotProductCosts = function (ele) {
  var quantity = parseFloat($(ele).children('.ucost').text().slice(1));
  var unitCost = parseFloat($(ele).find('.qty input').val());
  var totCost = quantity * unitCost;
  $(ele).children('.tcost').html("$" + totCost.toFixed(2));
  return totCost;
}

$(document).ready(function () {
  var productCosts = [];
  
  $('tbody tr').each(function (index, element) {
    var prodCost = updateTotProductCosts(element);
    productCosts.push(prodCost);
  });
  
  var cartCost = productCosts.reduce(sum);
  $('#cartCost').html("$" + cartCost.toFixed(2));
});