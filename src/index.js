// @ts-check

const { caltotal } = require("./petcounter");

/**
 * @file index.js is the homepage for this application
 * @author Hong Ly
 * @see <a href="https://honglytech.com">Hong Ly Tech</a>
 */

/**
 * Pet name
 * @type {string}
 */
const petName = "Ruby";

/**
 * number
 * @type {number}
 */
const number = 100;

/**
 * My Array
 * @type {Array<number>}
 */
const myArray = [10, 132.12, 100];
// const myArray = [10, 132.12, 100, "Hi", true]

/**
 * Pet object
 * @type {{id: number, name: string, age: number|string}}
 */
const pet = {
  id: 1,
  name: "Coco",
  age: "2",
};

/**
 * Calculate pet age
 * @param {number} current current year
 * @param {number} yearOfBirth year of pet birth
 * @returns {string} pet age
 */
const calculatePetAge = (current, yearOfBirth) => {
  return `${current - yearOfBirth}`;
};

console.log(calculatePetAge(2021, 2019));

//////////////////////////

/**
 *
 * @typedef {Object} Dog
 * @property {number} id
 * @property {string} name
 * @property {number|string} age
 * @property {boolean} [isMale] gender {optional}
 */

/**
 * @type {Dog}
 */
const dog = {
  id: 1,
  name: "Bean",
  age: 2,
  // isMale: true,
};

/**
 * Class to create a new pet owner
 */
class Owner {
  /**
   * Pet owner detail
   * @param {Object} ownerDetail
   */
  constructor(ownerDetail) {
    /**
     * @property {string} name pet owner name
     */
    this.name = ownerDetail.name;
    /**
     * @property {number} age pet owner age
     */
    this.age = ownerDetail.age;
  }

  /**
   * @property {Function} printOwner print out owner information
   * @returns {void}
   */
  printOwner() {
    console.log(`Owner's name is ${this.name} and her age is ${this.age}`);
  }
}

/**
 * Link to Owner class
 * See {@link Owner}
 */
const owner1 = new Owner({
  name: "Kelly",
  age: 18,
});

owner1.printOwner();

console.log(caltotal(19, 5));
