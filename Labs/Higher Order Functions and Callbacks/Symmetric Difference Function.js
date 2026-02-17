const diffArray = (arr1, arr2) => {
    const newArr = arr1.filter(item => !arr2.includes(item)).concat(arr2.filter(item => !arr1.includes(item)));
    return newArr;
}