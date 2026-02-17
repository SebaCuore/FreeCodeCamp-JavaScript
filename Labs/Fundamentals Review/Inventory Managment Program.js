let inventory = [];

const findProductIndex = (productName) => {
    for (let productObject of inventory) {
        if (productObject.name === productName.toLowerCase()) {
            return inventory.indexOf(productObject);
        } 
    }
    return -1;
}


const addProduct = (productObject) => {
    productObject.name = productObject.name.toLowerCase();
    if (findProductIndex(productObject.name) === -1) {
        inventory.push(productObject);
        console.log(`${productObject.name} added to inventory`);
    } else {
        inventory[findProductIndex(productObject.name)].quantity += productObject.quantity;
        console.log(`${productObject.name} quantity updated`);
    }
}

const removeProduct = (productName, quantityToRemove) => {
    if (findProductIndex(productName) !== -1) {
        if (inventory[findProductIndex(productName)].quantity >= quantityToRemove) {
            inventory[findProductIndex(productName)].quantity -= quantityToRemove;
            console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[findProductIndex(productName)].quantity}`);
            if (inventory[findProductIndex(productName)].quantity === 0) {
                inventory.splice(findProductIndex(productName), 1);
            }
        } else {
            console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[findProductIndex(productName)].quantity}`);
        }
    } else {
        console.log(`${productName.toLowerCase()} not found`);
    }
}


