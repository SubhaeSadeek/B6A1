const formatValue = (
	transformValue: number | string | boolean
): number | string | boolean => {
	if (typeof transformValue === "number") {
		return transformValue * 10;
	} else if (typeof transformValue === "string") {
		return transformValue.toUpperCase();
	} else {
		return !transformValue;
	}
};

const getLength = <T>(lengthOfValue: T[] | string): number => {
	if (typeof lengthOfValue === "string") {
		return lengthOfValue.length;
	} else {
		return lengthOfValue.length;
	}
};

// ! problem ***THREE*** (DELETE after using)

class Person {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	getDetails() {
		const getName = this.name
			.toLowerCase()
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
		console.log(getName);
		return `"Name: ${getName}, Age: ${this.age}"`;
	}
}

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

// !__________-------------------------------------
// ?__________-------------------------------------
// !__________-------------------------------------

const getSwallowVelocity = (type: "african" | "european"): string => {
	if (type === "african") {
		return "Roughly 11 meters per second.";
	}
	return "I... I don't know that!";
};

const isCatLiquid = (isAsleep: boolean, containerShape: string): boolean => {
	return isAsleep && containerShape !== "none";
};

class Wizard {
	name: string;
	favoriteSpell: string;

	constructor(name: string, favoriteSpell: string) {
		this.name = name;
		this.favoriteSpell = favoriteSpell;
	}

	castSpell(): string {
		return `${this.name} casts ${this.favoriteSpell}!`;
	}
}
