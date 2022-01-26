function Calculate()
{
	var n = document.getElementById("NField").value

	//var ans_1 = Fibonacci(n)
	//var ans_2 = ans_1 % 1234567890
	var ans_3 = Fibonacci_2(n)
	//document.getElementById("A1").innerHTML = ans_1;
	//document.getElementById("A2").innerHTML = ans_2;
	document.getElementById("A3").innerHTML = ans_3;
	console.log(218922995834555200000%1234567890)
}

fibonacciSequence = {}

/*function Fibonacci(n)
{
	if(n in fibonacciSequence)
	{
    	return fibonacciSequence[n]
	}

  	if(n == 1 || n == 0)
  	{
    	return n
  	}

  	nthNumber = (Fibonacci(n-1) + Fibonacci(n-2))
  	fibonacciSequence[n] = nthNumber
  	return nthNumber
}*/

function Fibonacci_2(n)
{
	return ((fi(n, true)-fi(0-n, false))/(2*fi(1, true)-1) % 1234567890)
}

function fi(n, x1)
{
	if(x1 == true)
	{
		var x = Math.pow(((1 + Math.sqrt(5)) / 2), n)
		console.log("fi is " + x)
		return x
	}
	else
	{
		var x = Math.pow(0-((1 + Math.sqrt(5)) / 2), n)
		console.log("fi is " + x)
		return x
	}  
}