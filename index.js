console.log('server is started by me...');
demoFunc();

function demoFunc() {
	console.log('demo func called');

	let x = 5;
	// === means value and type bioth equals
	if (x === 5) {
		console.log('equal');
	} else {
		console.log('not equal');
	}

	console.log(x);
	console.log(typeof x);

	const person = {
		firstName: 'John',
		lastName: 'Doe',
		id: 5566,
		fullName: function () {
			return this.firstName + ' ' + this.lastName;
		},
	};

	console.log(person);
	console.log(person.fullName());
	console.log(typeof person);

	let someString = 'Hammas Rao'.split(' ');
	console.log(someString);
	someString = 'Hammas Rao'.slice(0, 2); // will return Ha
	console.log(someString);

	const arr = ['Saab', 'Volvo', 1];
	console.log(arr);
	console.log(arr.length);
	console.log(typeof arr);

	arr.map((a, index, sameArray) => {
		console.log('mapped ' + a + ' index ' + index + ' ' + sameArray[1]);
	});

	localStorage.setItem(1, arr);
	sessionStorage.setItem(1, arr);

	const setObj = (obj) => {
		obj.name = 'Hammas "Rao" ';
	};

	let newObj = {
		name: 'Ali',
		phone: '03068513103',
	};

	setObj(newObj);

	console.log('Name: ' + newObj.name);

	arr.forEach((item) => {
		console.log('arr ' + item);
	});

	//indexedDB.open();
}
