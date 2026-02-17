const uniteUnique = (arr1, arr2, ...rest) => {
    const uniqueSet = new Set();
    const allArrays = [arr1, arr2, ...rest];
    for (const arr of allArrays) {
        for (const item of arr) {
            if (!uniqueSet.has(item)) { 
            uniqueSet.add(item);

            }
        }
    }
    return Array.from(uniqueSet);
}