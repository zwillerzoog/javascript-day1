function whoAmI(name, age) {
	const yearOfBirth = 2017 - age;
	console.log("Hi my name is Heidi and I'm 25 years old");
	console.log(`I was born in ${yearOfBirth}`);
	if (age < 0) {
		throw new Error("Age cannot be negative");
	} else if (age === undefined || name === undefined) {
		console.log("Arguments not valid");
	} else {
	return age;
	}
}


whoAmI("Heidi");
