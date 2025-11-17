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
		return `"Name: ${getName}, Age: ${this.age}"`;
	}
}

const filterByRating = (
	items: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
	const itemsRatingZeroToFive = items.filter(
		(item) => item.rating >= 0 && item.rating <= 5
	);
	return itemsRatingZeroToFive.filter(
		(itemAboveRating4) => itemAboveRating4.rating >= 4
	);
};

// ! problem ***FIVE*** (DELETE after using)
const filterActiveUsers = (
	users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] => {
	return users.filter((user) => {
		return user.isActive === true;
	});
};
const users = [
	{ id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
	{ id: 2, name: "Asha", email: "asha@example.com", isActive: false },
	{ id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));
// __________-------------------------------------
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
