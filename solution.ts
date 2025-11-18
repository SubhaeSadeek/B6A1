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
		return `'Name: ${getName}, Age: ${this.age}'`;
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

const filterActiveUsers = (
	users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] => {
	return users.filter((user) => user.isActive === true);
};

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}
const printBookDetails = (bookInfo: Book): string => {
	return `Title: ${bookInfo.title}, Author: ${bookInfo.author}, Published: ${
		bookInfo.publishedYear
	}, Available: ${bookInfo.isAvailable ? "Yes" : "No"}`;
};

const getUniqueValues = (
	array1: (number | string)[],
	array2: (number | string)[]
): (number | string)[] => {
	let uniqueItems: (number | string)[] = [];
	const utilForGettingUniqueValue = (
		arr: (number | string)[],
		value: number | string
	): boolean => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				return true;
			}
		}
		return false;
	};
	for (let i = 0; i < array1.length; i++) {
		if (!utilForGettingUniqueValue(uniqueItems, array1[i])) {
			uniqueItems.push(array1[i]);
		}
	}
	for (let i = 0; i < array2.length; i++) {
		if (!utilForGettingUniqueValue(uniqueItems, array2[i])) {
			uniqueItems.push(array2[i]);
		}
	}
	return uniqueItems;
};

const calculateTotalPrice = (
	products: {
		name: string;
		price: number;
		quantity: number;
		discount?: number;
	}[]
): number => {
	const totalPricePerProduct = products.map((product) => {
		const { price, quantity, discount } = product;

		if (discount !== undefined && discount >= 0 && discount <= 100) {
			return price * quantity * (1 - discount / 100);
		} else {
			return price * quantity;
		}
	});

	const totalPriceOfAllProduct = totalPricePerProduct.reduce(
		(sum, productPrice) => sum + productPrice,
		0
	);

	return totalPriceOfAllProduct;
};

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
