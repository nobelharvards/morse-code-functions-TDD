const {expect, test} = require('@jest/globals');
const {morseToEnglish, englishToMorse, checkDelimiter} = require("./translatorFunctions.js");
const {alphabet, morse} = require("./dictionaryWithoutExport.js");

describe("Unit tests for Morse to English.", () => {
    test("Should return string.", () => {
        expect(morseToEnglish("", morse, " ").constructor.name).toBe("String");
    });
    test("Translate Morse to English with space delimiter.", () => {
        expect(morseToEnglish("-... .-.. .- .- .-. --. ....", morse, " ")).toBe("blaargh");
    });
    test("Translate Morse to English with vertical bar delimiter.", () => {
        expect(morseToEnglish("-.--|.|.-|.-|.-.|--.|....", morse, "|")).toBe("yeaargh");
    });
    test("Translate something not in dictionary.", () => {
        expect(morseToEnglish("blep", morse, " ")).toBe("Either one or more characters do not exist in dictionary, or no delimiter between morse characters (default delimiter is space if not specified).");
    });
    test("Translate Morse to English with wrong delimiter.", () => {
        expect(morseToEnglish("-.--|.|.-|.-|.-.|--.|....", morse, " ")).not.toBe("yeaargh");
        expect(morseToEnglish("-.--|.|.-|.-|.-.|--.|....", morse, " ")).toBe("Either one or more characters do not exist in dictionary, or no delimiter between morse characters (default delimiter is space if not specified).");
    });
    test("Empty input.", () => {
        expect(morseToEnglish("", morse, " ")).toBe("Either one or more characters do not exist in dictionary, or no delimiter between morse characters (default delimiter is space if not specified).");
    });
});
describe("Unit tests for English to Morse.", () => {
    test("Should return string.", () => {
        expect(englishToMorse("", alphabet, " ").constructor.name).toBe("String");
    });
    test("Translate English to Morse with space delimiter.", () => {
        expect(englishToMorse("blaargh", alphabet, " ")).toBe("-... .-.. .- .- .-. --. ....");
    });
    test("Translate English to Morse with vertical bar delimiter.", () => {
        expect(englishToMorse("yeaargh", alphabet, "|")).toBe("-.--|.|.-|.-|.-.|--.|....");
    });
    test("Translate something not in dictionary.", () => {
        expect(englishToMorse("!@#$%^&*()_+", alphabet, " ")).toBe("One or more characters do not exist in dictionary.");
    });
    test("Empty input.", () => {
        expect(englishToMorse("", alphabet, " ")).toBe("");
    });
});
describe("Unit tests for delimiter check function.", () => {
    test("Should return string.", () => {
        expect(checkDelimiter("").constructor.name).toBe("String");
    });
    test("Not specifying delimiter should default to space.", () => {
        expect(checkDelimiter("")).toBe(" ");
    });
    test("Specifying delimiter should return itself.", () => {
        expect(checkDelimiter("|")).toBe("|");
    });
    test("Specifying space as delimiter should not break the function.", () => {
        expect(checkDelimiter(" ")).toBe(" ");
    });
});