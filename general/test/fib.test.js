let chai = require('chai');
let expect = chai.expect

function fib (num, memo=[]) {
  if (num <= 1) {
  return 1
  } else if (memo[num]) {
    memo[num] = fib(num-1) + fib (num-2);
  }
  return memo[num]
}

//  ===== Testing =====

//  let memo = []

describe('The Fib function', () => {

  let test  = fib(4)

  it('...runs a test', () => {
    cons
  });
});