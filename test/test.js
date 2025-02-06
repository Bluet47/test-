const { calculateCO2 } = require('../script.js'); // Use require() for CommonJS

describe("CO2 Emissions Calculator", () => {
    test("calculates CO2 emissions correctly for 100 miles", () => {
        expect(calculateCO2(100)).toBe("11.50");
    });

    test("throws an error for negative distance", () => {
        expect(() => calculateCO2(-50)).toThrow("Invalid distance. Please enter a positive number.");
    });

    test("throws an error for non-numeric input", () => {
        expect(() => calculateCO2("abc")).toThrow("Invalid distance. Please enter a positive number.");
    });
});



//    test("throws an error for non-numeric input", () => {
//        expect(() => calculateCO2("abc")).toThrow("Invalid distance. Please enter a positive number.");
//    });

//    test("throws an error for empty input", () => {
//        expect(() => calculateCO2()).toThrow("Invalid distance. Please enter a positive number.");
//    });

});
