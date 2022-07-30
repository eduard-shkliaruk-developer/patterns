// Abstract factory pattern

function AbstractFactory(address, items, options) {
    if (options.type === 'express') {
        return ExpressFactory(address, items, options);
    }

    if (options.type === 'same_day') {
        return SameDayFactory(address, items, options);
    }
}

function ExpressFactory(address, items, options) {
    // ...
}

function SameDayFactory(address, items, options) {
    const { distance } = options;

    const byBike = 5;
    const byTruck = 10;
    const byCar = 15;

    if (distance > 0 && distance <= byBike) {
        return new DeliveryByBike(address, items);
    }

    if (distance > byBike && distance <= byTruck) {
        return new DeliveryByTruck(address, items);
    }

    if (distance > byTruck && distance <= byCar) {
        return new DeliveryByCar(address, items);
    }
}

class DeliveryByBike {
    constructor(address, items) {
        this.address = address;
        this.items = items;
    }

    deliverItems() {
        console.log(
            `Your orders are delivering to ${this.address} by Bike`
        );
    }
}

class DeliveryByTruck {
    constructor(address, items) {
        this.address = address;
        this.items = items;
    }

    deliverItems() {
        console.log(
            `Your orders are delivering to ${this.address} by Truck`
        );
    }
}

class DeliveryByCar {
    constructor(address, items) {
        this.address = address;
        this.items = items;
    }

    deliverItems() {
        console.log(
            `Your orders are delivering to ${this.address} by Car`
        );
    }
}

const items = [
    {
        id: 1,
        name: 'Book',
    },
    {
        id: 2,
        name: 'Desk',
    },
];

const address = 'New York';

const options = {
    type: 'same_day',
    distance: 7,
};

const orders = AbstractFactory(address, items, options);

orders.deliverItems();
