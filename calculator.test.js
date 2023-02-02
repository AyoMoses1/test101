const Calculator = require('./calculator')

describe('addition', () => {

  test('It adds two numbers', () => {
    expect(Calculator.add(3,5)).toBe(8)
  })

  test('It returns the sum', () => {
    expect(Calculator.add(-5, 5)).toBe(0)
  })

  test('It returns the sum of two negative numbers', () => {
    expect(Calculator.add(-3, -5)).toBe(-8)
  })

})

describe('subtraction', () => {

  test('It subtracts two numbers', () => {
    expect(Calculator.subtract(3,5)).toBe(-2)
  })

  test('It returns the difference', () => {
    expect(Calculator.subtract(-5, 5)).toBe(-10)
  })

  test('It also returns of difference of two negative numbers', () => {
    expect(Calculator.subtract(-3, -5)).toBe(2)
  })

})

describe('division', () => {

  test('It divides two numbers', () => {
    expect(Calculator.divide(3,5)).toBe(0.6)
  })

  test('It divides two numbers', () => {
    expect(Calculator.divide(-5, 5)).toBe(-1)
  })

  test('It divides two negative numbers', () => {
    expect(Calculator.divide(-2, -2)).toBe(1)
  })

})

describe('multiplication', () => {

  test('It multiplies two numbers', () => {
    expect(Calculator.multiply(3,5)).toBe(15)
  })

  test('It returns the product of -5 and 5', () => {
    expect(Calculator.multiply(-5, 5)).toBe(-25)
  })

  test('It returns the product of two negative numbers', () => {
    expect(Calculator.multiply(-3, -5)).toBe(15)
  })

})

