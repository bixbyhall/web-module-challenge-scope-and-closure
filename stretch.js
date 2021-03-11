function createBase(base) {
    return function(number) {
        return base + number;
    }
}

let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27