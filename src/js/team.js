/* eslint-disable class-methods-use-this */

import Person from './person';

const person1 = new Person();
const person2 = new Person();
const person3 = new Person();

export default class Team {
  * [Symbol.iterator]() {
    yield person1;
    yield person2;
    yield person3;
    return undefined;
  }
}
