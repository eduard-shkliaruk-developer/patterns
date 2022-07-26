// Factory pattern

class Cat {
    constructor(weight, name) {
        this.weight = weight;
        this.name = name;
    }

    getAboutItself() {
        console.log(`${this.name} has ${this.weight} kilo`);
    }
}

class Dog {
    constructor(weight, name) {
        this.weight = weight;
        this.name = name;
    }

    getAboutItself() {
        console.log(`${this.name} has ${this.weight} kilo`);
    }
}

class Pig {
    constructor(weight, name) {
        this.weight = weight;
        this.name = name;
    }

    getAboutItself() {
        console.log(`${this.name} has ${this.weight} kilo`);
    }
}

function factory(weight, name) {
    let Animal;

    if (weight < 10) {
        Animal = Cat;
    }

    if (weight >= 10 && weight < 20) {
        Animal = Dog;
    }

    if (weight >= 20) {
        Animal = Pig;
    }

    return new Animal(weight, name);
}

const nameAnimal = 'Pety'
const weight = 9;

const animal = factory(weight, nameAnimal);

animal.getAboutItself();
