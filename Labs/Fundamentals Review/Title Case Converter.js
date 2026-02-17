const titleCase = (str) => {
    const words = str.split(' ');
    for (let word in words) {
        words[word] = words[word][0].toUpperCase() + words[word].slice(1).toLowerCase();
    }
    return words.join(' ');
}