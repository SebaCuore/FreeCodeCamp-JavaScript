const frankenSplice = (arr1, arr2, index) => {
    let frankenArr = arr2.slice();
    frankenArr.splice(index, 0, ...arr1)
    return frankenArr;
}