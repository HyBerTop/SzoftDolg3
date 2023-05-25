/*
* File: app.spec.js
* Author: Róth József
* Copyright: 2023, Róth József
* Group: Szoft I/1/N
* Date: 2023-05-25
* Github: https://github.com/HyBerTop/SzoftDolgozat3
*/

describe("getUnsuccessCount", () => {
    it("Kiszámolja mennyi hibás próbálkozás lett", () => {
      const competitor = 10;
      const reached = 7;
      const expectedUnsuccess = 3;
  
      const unsuccessCount = getUnsuccessCount(competitor, reached);
  
      expect(unsuccessCount).toBe(expectedUnsuccess);
    });
  });
  
  describe("getUnsuccessPercent", () => {
    it("Kiszámolja a százalékát a hibás próbálkozásoknak", () => {
      const competitor = 10;
      const unsuccessful = 3;
      const expectedPercent = 30;
  
      const unsuccessPercent = getUnsuccessPercent(competitor, unsuccessful);
  
      expect(unsuccessPercent).toBe(expectedPercent);
    });
  });
  