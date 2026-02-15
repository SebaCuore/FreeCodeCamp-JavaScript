const largestOfAll = (arr) => {
    let largests = [];
    for (let i = 0; i < arr.length; i++) {
        largests.push(Math.max(...arr[i]));
    }
    return largests;
}