var message= "in global";
console.log("global:message="+message);

var a=function (){
	var message="inside a";
	console.log("a:message="+message);
}

function b(){
	console.log("b:message="+message);
}

a();

if (x===y) {
	console.log("Strict x=y")
}


if(false||null|
	undefined||""||0||NaN) {
	console.log("This line will never execute")
}

else {
	console.log("X does not equal y")
}
