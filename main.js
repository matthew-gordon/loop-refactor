'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/


module.exports = {

  sum: (arr, base) => {
    return base + arr.reduce((sum, val) => {
      return sum + val
    })
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some((obj) => {
      return obj.hasOwnProperty(prop);
    })
  },

  convertNameArrayToObject: (arr) => {
    return arr.map((subArr) => {
      return {
        first: subArr[0],
        last: subArr[1]
      }
    })
  },

  objContainsProp: (arr, prop) => {
    return arr.every((obj) => {
      return obj.hasOwnProperty(prop)
    })
  },

  stringMatch: (arr, str) => {
    return arr.filter((val) => {
      return val.includes(str)
    });
  },
};
