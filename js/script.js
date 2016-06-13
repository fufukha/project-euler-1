//The sum of all the natural numbers below a given n
//that are multiples of 3 or 5


$(document).ready(function() {
	$("input").click(function () {
		$("input").attr("value", "");
	});

	$("input").keyup(function() {
		var input = $(this).val();
		sumOfMulitplesOfThreeOrFive(input);
	});

//Finds the sum of all the multiples of 3 or 5 below a given n
	var sumOfMulitplesOfThreeOrFive = function(number) {
		if (number === '') {
			var blankMessage = "";
			var outputElement = $("#output");
			outputElement.html(blankMessage);
		} else {
			//Not the best use of parseInt
			var number = parseInt(number);
			if (number > 0) {
				var sum = 0;
				for ( i = 1; i < number; i++ ) {
					if (i % 3 === 0 || i % 5 === 0 ){
						sum += i;
					}
				}
				var answer = sum.toString();
				var outputElement = $("#output");
				outputElement.html(answer);
			} else {
				var errorMessage = "Invalid input!";
				var outputElement = $("#output");
				outputElement.html(errorMessage);
			}
		}
	};
});