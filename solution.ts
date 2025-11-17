// ! problem one (DELETE after using)

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

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

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
