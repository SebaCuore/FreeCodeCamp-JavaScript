const destroyer = (arr, ...remove) => {
    return arr.filter(item => !remove.includes(item));
}