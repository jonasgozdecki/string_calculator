export const NegativeNumberError = Error("Negatives not allowed");
export default class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    const delimiter = this.getDelimiter(numbers);
    const formattedInput = this.formatInput(numbers);
    return this.calculateSum(this.getNumbers(formattedInput, delimiter));
  }

  formatInput(input) {
    const delimiterRegExp = /^(\/\/.*\n)/; // excepting // and /n in the group
    return input
  }

  getDelimiter(input) {
    let delimiters = [];
    return input
  }

  getNumbers(string, delimiter) {
    return string
      .split(delimiter)
      .filter(n => n !== "")
      .map(n => parseInt(n, 0));
  }

  calculateSum(numbers) {
    const negatives = [];
    
    return finalSum;
  }
}