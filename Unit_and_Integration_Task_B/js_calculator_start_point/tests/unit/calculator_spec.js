var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add two numbers together and return the result', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    const expected = 5;
    assert.strictEqual(actual, expected);
  })

  it('it can subtract two numbers and return the result', function () {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    const expected = 3;
    assert.deepStrictEqual(expected, actual);
  })

  it('it can multiply two numbers and return the result', function () {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    const expected = 15;
    assert.deepStrictEqual(expected, actual);
  })

  it('it can divide two numbers and return the result', function () {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    const expected = 3;
    assert.deepStrictEqual(expected, actual);
  })


  it('it can concatenate multiple button clicks', function () {
    calculator.numberClick(5);
    calculator.numberClick(2);
    const actual = calculator.runningTotal;
    const expected = 52;
    assert.deepStrictEqual(actual, expected);
  })

  it('it can chain multiple operators together', function () {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    const expected = 8;
    assert.deepStrictEqual(actual, expected);
  })

  it('it can clear the running total without affecting the calculation', function () {
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    const expected = 2;
    assert.deepStrictEqual(actual, expected);
  })
});
