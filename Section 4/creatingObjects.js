const car1 = {
    name: "Nissan Skyline r34",
    color: "Blue",
    price: 315000
};

const car2 = {
    name: "Porche 1911",
    color: "orange",
    price: 200731
};

const car3 = {
    name: "Lamborghini Aventator",
    color: "Red",
    price: 710250
};

console.log(car2.name)
console.log(car3.color)
console.log(car1.price)

car3.color = "Purple"
// you dont need to re-create an object if you want to rename certain parts of it, you can just : "name.part = new parbt"


console.log(car3.color)