(function(){
	function factorial(n){
		if(n < 2) {
			return 1;
		}
		return n*factorial(n - 1);
	}
	var factorialCache = {
		"0": 1,
		"1": 1,
		"2": 2
	};
	
	function addFactorialCache(){
		var i, il = 9;
		for(i = 3; i<=il; i++){
			factorialCache[i] = factorial(i);
		}
	}
	addFactorialCache();
	function checkSum(number) {
		var number2str = number.toString().split("");

		var i,
			il = number2str.length,
			sum = 0;

		for(i = 0; i < il; i += 1) {
			sum += factorialCache[number2str[i]];
		}
		if(sum === number){
			console.log(number);
		}
	}
	var maxNum = 7 * factorialCache[9];
	function showNumbers(maxNum) {
		console.time('start');
		var i;
		while(maxNum--) {
			checkSum(maxNum);
		}
		console.timeEnd('start');
	}
	showNumbers(maxNum);
})();