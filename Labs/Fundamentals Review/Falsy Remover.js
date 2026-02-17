const bouncer = (arr) => {
    let filteredArr = [];
    for (let value of arr) {
        if (value) {
            filteredArr.push(value);
        }
    }
    return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9]));