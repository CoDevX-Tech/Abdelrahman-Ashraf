// Problem 1

const user = {
    id: 1,
    name: "Sara",
    address: {
        city: "Cairo",
        zip: "12345"
    }
};

const nums = [10, 20, 30, 40];



let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x, y);



const { name: userName, role = "guest" } = user;

console.log(userName);
console.log(role);



const {
    address: { city }
} = user;

console.log(city);



const [first, , ...rest] = nums;

console.log(first);
console.log(rest);



function printUser({ name, address: { city } = {} } = {}) {

    console.log(`${name} from ${city}`);

}

printUser(user);





// Problem 2

class BankAccount {

    #balance;

    constructor(owner, balance = 0) {

        this.owner = owner;
        this.#balance = balance;

    }

    deposit(amount) {

        if (amount < 0) {
            throw new Error("Negative amount");
        }

        this.#balance += amount;

    }

    withdraw(amount) {

        if (amount > this.#balance) {
            throw new Error("Not enough balance");
        }

        this.#balance -= amount;

    }

    get balance() {

        return this.#balance;

    }

}

const account = new BankAccount("Sara", 1000);

account.deposit(500);

account.withdraw(200);

console.log(account.balance);




// Problem 3

class SavingsAccount extends BankAccount {

    constructor(owner, balance, interestRate) {

        super(owner, balance);

        this.interestRate = interestRate;

    }

    addInterest() {

        this.deposit(this.balance * this.interestRate);

    }

}

const save = new SavingsAccount("Ahmed", 1000, 0.05);

save.deposit(500);

save.addInterest();

console.log(save.balance);





// Problem 4

class MathUtils {

    static square(n) {

        return n * n;

    }

    static cube(n) {

        return n * n * n;

    }

    static isEven(n) {

        return n % 2 === 0;

    }

}

MathUtils.PI = 3.14159;

console.log(MathUtils.square(5));

console.log(MathUtils.cube(3));

console.log(MathUtils.isEven(10));

console.log(MathUtils.PI);







// Problem 5


// mathUtils.js

export class MathUtils {

    static square(n) {
        return n * n;
    }

    static cube(n) {
        return n * n * n;
    }

    static isEven(n) {
        return n % 2 === 0;
    }

}

MathUtils.PI = 3.14159;


// ============================


// config.js

export default {

    appName: "ITI Bank",

    version: "1.0"

};


// ============================


// main.js

import { MathUtils } from "./mathUtils.js";

import config from "./config.js";

console.log(MathUtils.square(4));

console.log(MathUtils.cube(3));

console.log(MathUtils.isEven(8));

console.log(MathUtils.PI);

console.log(config.appName);

console.log(config.version);


