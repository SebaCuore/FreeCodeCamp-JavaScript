const pyramid = (strPattern, rowsNum, isDownward) => {
    if (rowsNum < 1) return '';
    
    let result = '\n';
    
    for (let i = 0; i < rowsNum; i++) {
        const currentRow = isDownward ? (rowsNum - 1 - i) : i;
        
        const spaces = ' '.repeat(isDownward ? i : rowsNum - 1 - i);
        const pattern = strPattern.repeat(currentRow * 2 + 1);
        
        result += spaces + pattern + '\n';
    }
    
    return result;
}

console.log(pyramid("o", 4, false));