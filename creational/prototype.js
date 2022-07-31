// Prototype pattern

// That is a prototype
const Book = {
    bookName: '',
    price: '',

    name() {
        console.log(`${this.bookName} book`);

        return this;
    },

    getPrice() {
        console.log(`${this.bookName} costs ${this.price}`);

        return this;
    }
};

// An instance of prototype
const Algorithms = Object.assign({}, Book);

Algorithms.bookName = 'Algorithms';
Algorithms.price = '20$';

// An instance of prototype
const ECMAScript = Object.assign({}, Book);

ECMAScript.bookName = 'ECMAScript';
ECMAScript.price = '30$';

// Execution
Algorithms.name().getPrice();
ECMAScript.name().getPrice();
