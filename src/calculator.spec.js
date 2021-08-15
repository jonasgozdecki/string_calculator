import StringCalculator from "./calculator";

describe("Create a simple String calculator with a method: int Add(string numbers)", () => {
  const sc = new StringCalculator();
  it("a. The numbers in the string are separated by a comma", () => {
    expect(sc.add("0,1")).toBe(1);
  });

  it("b. Empty strings should return 0", () => {
    expect(sc.add("")).toBe(0);
  });

  it("c. The return type should be an integer", () => {
    expect(sc.add("1,2")).not.toBeNaN();
  });

  it("d. Example input: “1,2,5” - expected result: '8'", () => {
    expect(sc.add("1,2,5")).toBe(8);
  });
});

describe("2. Change the Add method to handle new lines in the input format.", () => {
  const sc = new StringCalculator();
  it("a. Handle new lines in the input format, example1.", () => {
    expect(sc.add("1\n,2,3")).toBe(6);
  });

  it("b. Handle new lines in the input format ,example2.", () => {
    expect(sc.add("1,\n2,4")).toBe(7);
  });
});

describe("3. Support a custom delimiter.", () => {
  const sc = new StringCalculator();
  it("c. Format: '//[delimiter]\n[delimiter separated numbers]'", () => {
    expect(sc.add("//;\n1;3;4")).toBe(8);
  });

  it("e. handle other separator type I", () => {
    expect(sc.add("//$\n1$2$3")).toBe(6);
  });

  it("e. handle other separator type II", () => {
    expect(sc.add("//@\n2@3@8")).toBe(13);
  });
});

describe("4. Negative number should throw an exception.", () => {
  const sc = new StringCalculator();
  it("Negatives not allowed", () => {
    function getNegatives() {
      sc.add("1,2,3,-4");
      //TODO: Show numbers
    }
    expect(getNegatives).toThrowError();
  });
});

describe("Bonus ", () => {
  const sc = new StringCalculator();
  it("1.a. numbers larger than 1000 should be ignored", () => {
    expect(sc.add("2,1002")).toBe(2);
  });

  it("2.a. delimiters can be arbitrary length", () => {
    expect(sc.add("//***\n1***2***3")).toBe(6);
  });

  it("3.a. allow for multiple delimiters", () => {
    expect(sc.add("//$,@\n1$2@3")).toBe(6);
  });

  it("4.a. allow multiple delimiters of arbitrary length", () => {
    expect(sc.add("//$,@,#\n1$$$$4###2@@@@@@3")).toBe(10);
  });
});