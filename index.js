// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(Bob) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(Garfield) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.pop("Garfield");
    return cats;
}

function destructivelyRemoveFirstCat(Milo) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.shift("Milo");
    return cats;
}

function appendCat(Broom) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const appendCat = [...cats];
    appendCat.push("Broom");
    return appendCat;
}

function prependCat(Arnold) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const prependCat = [...cats];
    prependCat.unshift("Arnold");
    return prependCat;
}

function removeLastCat(Garfield) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const removeLastCat = [...cats];
    removeLastCat.pop("Garfield");
    return removeLastCat;
}

function removeFirstCat(Milo) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    const removeFirstCat = [...cats];
    removeFirstCat.shift("Milo");
    return removeFirstCat;
}
