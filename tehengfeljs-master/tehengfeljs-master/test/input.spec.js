/*
* File: input.spec.js
* Author: Róth József
* Copyright: 2023, Róth József
* Group: Szoft I/1/N
* Date: 2023-05-25
* Github: https://github.com/HyBerTop/SzoftDolgozat3
*/

describe("indulBevitel", () => {
    beforeEach(() => {
    });
  
    it("Ha lenne, csinálnia kéne input testeket", () => {
    });
  });

describe("Input Validation", () => {
    it("valid számok?", () => {
      const goodInputs = ["10", "3.14", "0.5"];
  
      goodInputs.forEach((input) => {
        const result = goodInputs(input);
        expect(result).toBe(true);
      });
    });
  
    it("Vannak invalid karakterek?", () => {
      const badInputs = ["abc", "!@#", "2a5"];
  
      badInputs.forEach((input) => {
        const result = isGoodInput(input);
        expect(result).toBe(false);
      });
    });
});
  