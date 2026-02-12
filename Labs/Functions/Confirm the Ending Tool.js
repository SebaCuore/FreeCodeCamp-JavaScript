const confirmEnding = (str, target) => {
    if (str.slice(-target.length) === target) {
        return true;
    }
    return false;
}