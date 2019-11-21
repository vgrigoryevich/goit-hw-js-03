const getAllPropValues = (arr, prop) => {

    let result = [];
    for (let i of arr) {
        if (i[prop]) {
            result.push(i[prop]);
        }
    }
    return result;

};

const calculateTotalPrice = (arr, productName) => {

    for (let i of arr) {
        if (i.name === productName) {
            return i.price * i.quantity;
        }
    }
};


const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800