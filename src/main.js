// Memory Keys

var MRC = 0;
var tempVal;

var reset = function() {
	calc.screen.value = "0";
}

$('#mrc').on('click', function(){
	calc.screen.value = MRC;
});

$('#mMinus').on('click', function(){
	var parse = parseInt(calc.screen.value);
	if (MRC == "") {
		reset();
		return;
	} else {
		calc.screen.value = MRC - parse;
		MRC -= parse;
		if (MRC == 0) {
			$('#memory').css('visibility','hidden');
		}
	}
});

$('#mPlus').on('click', function(){
	var parse = parseInt(calc.screen.value);
	if (MRC == 0) {
		MRC = parse;
		tempVal = parse;
		reset();
	} else {
		tempVal = parse;
		calc.screen.value = (parse + MRC);
		MRC += tempVal;
	}
	$('#memory').css('visibility','visible');
});


// Number and Equation Keys

$('#zero').on('click', function(){
	if (calc.screen.value == '0') {
		return;
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '0';
		}
	}
});
$('#one').on('click', function(){
	if (calc.screen.value == '0') {
		calc.screen.value = '1';
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '1';
		}
	}
});
$('#two').on('click', function(){
	if (calc.screen.value == '0') {
		calc.screen.value = '2';
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '2';
		}
	}
});
$('#three').on('click', function(){
	if (calc.screen.value == '0') {
		calc.screen.value = '3';
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '3';
		}
	}
});
$('#four').on('click', function(){
	if (calc.screen.value == '0') {
		calc.screen.value = '4';
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '4';
		}
	}
});
$('#five').on('click', function(){
	if (calc.screen.value == '0') {
		calc.screen.value = '5';
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '5';
		}
	}
});
$('#six').on('click', function(){
	if (calc.screen.value == '0') {
		calc.screen.value = '6';
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '6';
		}
	}
});
$('#seven').on('click', function(){
	if (calc.screen.value == '0') {
		calc.screen.value = '7';
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '7';
		}
	}
});
$('#eight').on('click', function(){
	if (calc.screen.value == '0') {
		calc.screen.value = '8';
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '8';
		}
	}
});
$('#nine').on('click', function(){
	if (calc.screen.value == '0') {
		calc.screen.value = '9';
	} else {
		if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '9';
		}
	}
});
$('#decimal').on('click', function(){
	if (calc.screen.value.length == 10) {
			return;
		} else {
			calc.screen.value += '.';
		}
});
$("#onc").on('click', function(){
	calc.screen.value = "0";
});



$("#divide").on('click', function(){
	var q = calc.screen.value.length - 1;
	var test = calc.screen.value[q];
	if (calc.screen.value == '0') {
		return;
	} else {
		if (test !== '/' && test !== '*' && test !== '-' && test !== '+' && test !== '.') {
			calc.screen.value += "/";
		}
	}
});
$("#multiply").on('click', function(){
	var q = calc.screen.value.length - 1;
	var test = calc.screen.value[q];
	if (calc.screen.value == '0') {
		return;
	} else {
		if (test !== '/' && test !== '*' && test !== '-' && test !== '+' && test !== '.') {
			calc.screen.value += "*";
		}
	}
});
$("#plus").on('click', function(){
	var q = calc.screen.value.length - 1;
	var test = calc.screen.value[q];
	if (calc.screen.value == '0') {
		return;
	} else {
		if (test !== '/' && test !== '*' && test !== '-' && test !== '+' && test !== '.') {
			calc.screen.value += "+";
		}
	}
});
$("#minus").on('click', function(){
	var q = calc.screen.value.length - 1;
	var test = calc.screen.value[q];
	if (calc.screen.value == '0') {
		return;
	} else {
		if (test !== '/' && test !== '*' && test !== '-' && test !== '+' && test !== '.') {
			calc.screen.value += "-";
		}
	}
});
$("#equals").on('click', function(){
	var answer = eval(calc.screen.value);
	calc.screen.value = answer.toString().substring(0,10);
});
$("#sqrt").on('click', function(){
	if(calc.screen.value == '0'){
		return;
	} else {
		var answer = Math.sqrt(calc.screen.value); 
		calc.screen.value = answer.toString().substring(0,10);
	}
});
$("#percent").on('click', function(){
	if(calc.screen.value == '0'){
		return;
	} else {
		calc.screen.value /= 100
	}
});
$("#flipPos").on('click', function(){
	if(calc.screen.value == '0'){
		return;
	}
	if (calc.screen.value[0] == '-'){
		var pos = calc.screen.value.substring(1); 
		calc.screen.value = pos;
	} else {
		calc.screen.value = '-'+calc.screen.value;
	}
});