const mutation = (arr) => {
    let str1 = arr[0].toLowerCase().split('');
    let str2 = arr[1].toLowerCase().split('');

    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) === -1) {
            return false;
        }    
    }
    return true;
}