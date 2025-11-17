"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'boolean') {
        return value ? false : true;
    }
    else {
        return { message: 'wrong input ' };
    }
};
const getLength = (value) => {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    else {
        return { message: 'wrong input ' };
    }
};
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name:${this['name']}, age:${this['age']}`;
    }
}
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
const filterByRating = (value) => {
    const filteredValue = value.filter(book => book.rating > 4);
    return filteredValue;
};
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
const filterActiveUsers = (value) => {
    const findActiveUser = value.filter(user => user.isActive === true);
    return findActiveUser;
};
const myBook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: false,
};
const printBookDetails = (obj) => {
    console.log(`Title: ${obj['title']}, Author:${obj['author']}, Published: ${obj['publishedYear']}, Available:${obj['isAvailable'] ? 'Yes' : 'No'}`);
};
printBookDetails(myBook);
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const getUniqueValues = (arr1, arr2) => {
    let array = [...arr1, ...arr2];
    let emptyArray = [];
    for (let i = 0; i < array.length; i++) {
        let duplicate = false;
        for (let j = 0; j < emptyArray.length; j++) {
            if (array[i] === emptyArray[j]) {
                duplicate = true;
                break;
            }
        }
        if (duplicate === false) {
            emptyArray[emptyArray.length] = array[i];
        }
    }
    return emptyArray;
};
const arr = getUniqueValues(array1, array2);
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
const calculateTotalPrice = (products) => {
    if (products.length === 0) {
        return 0;
    }
    return products.reduce((totalPrice, product) => {
        const { price, quantity, discount } = product;
        // console.log((discount?/100 )as number);
        if (discount) {
            totalPrice += price * quantity - price * quantity * (discount * 0.01);
        }
        else {
            totalPrice += price * quantity;
        }
        return totalPrice;
    }, 0);
};
const price = calculateTotalPrice(products);
//# sourceMappingURL=solution.js.map