console.log("server is started by me...");
demoFunc();

function demoFunc() {
	document.write("hello world");
	console.log("demo func called");

	let x = 5;
	// === means value and type bioth equals
	if (x === 5) {
		console.log("equal");
	} else {
		console.log("not equal");
	}

	console.log(x);
	console.log(typeof x);

	const person = {
		firstName: "John",
		lastName: "Doe",
		id: 5566,
		fullName: function () {
			return this.firstName + " " + this.lastName;
		},
	};

	console.log(person);
	console.log(person.fullName());
	console.log(typeof person);

	let someString = "Hammas Rao".split(" ");
	console.log(someString);
	someString = "Hammas Rao".slice(0, 2); // will return Ha
	console.log(someString);

	const arr = ["Saab", "Volvo", 1];
	delete arr[0];
	console.log(arr);
	console.log(arr.length);
	console.log(typeof arr);
}
