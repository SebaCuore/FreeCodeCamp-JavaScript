let lunches = [];

const addLunchToEnd = (lunchesArr, lunch) => {
    lunchesArr.push(lunch);
    console.log(lunch + " added to the end of the lunch menu.")
    return lunchesArr;
}

const addLunchToStart = (lunchesArr, lunch) => {
    lunchesArr.unshift(lunch);
    console.log(lunch + " added to the start of the lunch menu.")
    return lunchesArr;
}

const removeLastLunch = (lunchesArr) => {
    if (lunchesArr.length > 0) {
        let removedLunch = lunchesArr.pop();
        console.log(removedLunch + " removed from the end of the lunch menu.")
    } else {
        console.log("No lunches to remove.")}   
    return lunchesArr;
}

const removeFirstLunch = (lunchesArr) => {
    if (lunchesArr.length > 0) {
        let removedLunch = lunchesArr.shift();
        console.log(removedLunch + " removed from the start of the lunch menu.")
    } else {
        console.log("No lunches to remove.")}
    return lunchesArr;
}

const getRandomLunch = (lunchesArr) => {
    if (lunchesArr.length > 0) {
        let randomIndex = Math.floor(Math.random() * lunchesArr.length);
        let randomLunch = lunchesArr[randomIndex];
        console.log("Randomly selected lunch: " + randomLunch);
    } else {
        console.log("No lunches available.");
    }
}

const showLunchMenu = (lunchesArr) => {
    if (lunchesArr.length > 0) {
        console.log("Menu items: " + lunchesArr.join(", ")); 
    } else {
        console.log("The menu is empty.");
    }
}