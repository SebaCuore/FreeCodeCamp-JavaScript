const whatIsInAName = (arrOfObjs, sourceObj) => {
    const sourceKeys = Object.keys(sourceObj);
    return arrOfObjs.filter(obj => {
        return sourceKeys.every(key => {
            return obj.hasOwnProperty(key) && obj[key] === sourceObj[key];
        });
    });
}