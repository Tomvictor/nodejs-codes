function Person(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname ;
};

Person.prototype.greet = function () {
	console.log('hello ' + this.firstname + ' '
		+ this.lastname)
}

var john = new Person('tom', 'victor') ; 
console.log(john.firstname);

//prottype calling

john.greet();

//new object creation for the demo

var jane = new Person('Jane' , 'tommy');

jane.greet();