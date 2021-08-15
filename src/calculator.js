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
    const matches = delimiterRegExp.exec(input);
    if (matches && matches.length > 0) {
      return input.replace(delimiterRegExp, ""); //without delimiters definitions
    }
    return input;
  }

  getDelimiter(input) {
    let delimiters = [];
    const multDelimiterRx = /\[([^])]/g; //matches any character, including newline characters.
    let matches = multDelimiterRx.exec(input);

    const inputLimit = /.+?(?=\n)|[^0-9]/.exec(input);

    if (inputLimit[0].indexOf(",") >= 3) {
      delimiters = inputLimit[0].replace("//", "").split(",");
    }

    if (delimiters.length > 0) {
      return new RegExp("[" + delimiters.join("") + "]");
    }
    matches = /^\/\/(.*)\n/.exec(input); //match a string that starts with a // and ends with \n
    if (matches && matches[1]) {
      return matches[1];
    }
    return /[\n,]/;
  }

  getNumbers(string, delimiter) {
    return string
      .split(delimiter)
      .filter(n => n !== "")
      .map(n => parseInt(n, 0));
  }

  calculateSum(numbers) {
    const negatives = [];
    const finalSum = numbers.reduce((sum, n) => {
      if (n > 1000) {
        return sum;
      }
      if (n < 0) {
        negatives.push(n);
        return 0;
      }
      return sum + n;
    }, 0);
    if (negatives.length > 0) {
      throw new NegativeNumberError(
        "Negatives not allowed: " + negatives.join(",")
      );
    }
    return finalSum;
  }
}