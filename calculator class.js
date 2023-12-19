class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, ""); // Remove spaces
    const validExpression = sanitizedExpression.replace(/[0-9+\-*\/\(\)]/g, ""); // Remove valid characters
    if (validExpression.length > 0) {
      throw new Error("Invalid expression");
    }

    try {
      this.result = eval(sanitizedExpression); // Use eval to calculate the expression
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
