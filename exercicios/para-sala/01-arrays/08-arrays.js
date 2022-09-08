console.clear();

const fruitsList = ["Watermelon", "Blueberry", "Apple", "Dragonfruit", "Peach"];


function compare(a, b) {
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
}

const order = fruitsList.sort(compare);
console.log(fruitsList);