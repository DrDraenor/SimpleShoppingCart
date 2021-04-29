var sum = function (acc, x) { return acc + x; };

var updateTotProductCosts = function (ele) {
	var quantity = parseFloat($(ele).children('.ucost').text().slice(1));
	var unitCost = parseFloat($(ele).find('.qty input').val());
	var totCost = quantity * unitCost;
	$(ele).children('.tcost').html("$" + totCost.toFixed(2));
	return totCost;
}

var updateCostsAndCartTotal = function () {
	var productCosts = [];
  
	$('tbody tr').each(function (index, element) {
	var prodCost = updateTotProductCosts(element);
	productCosts.push(prodCost);
	});

	var cartCost = productCosts.reduce(sum);
	$('#cartCost').html("$" + cartCost.toFixed(2));
}

$(document).ready(function () {
	updateCostsAndCartTotal();
	
	$(document).on('click', '.btn.remove', function (event) {
		$(this).closest('tr').remove();
		updateCostsAndCartTotal();
	});
	
	var timeout;
	$(document).on('input', 'tr input', function () {
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			updateCostsAndCartTotal();
		}, 600);
	});
});