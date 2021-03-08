const morseToEnglish = (morse, dictionary, delimiter) => {
    /* if(!morse)
        return "Empty input?"; */
    const inputArray = morse.split(delimiter);
    if (inputArray.some(character => !(character in dictionary)))
        return "Either one or more characters do not exist in dictionary, or no delimiter between morse characters (default delimiter is space if not specified).";
    return inputArray.map(character => dictionary[character])
        .join(""); // .reduce((a, b) => `${a}${b}`);
}

const englishToMorse = (english, dictionary, delimiter) => {
    const inputArray = english.split("");
    if (inputArray.some(character => !(character in dictionary)))
        return "One or more characters do not exist in dictionary.";
    return inputArray.map(character => dictionary[character])
        .join(delimiter); // .reduce((a, b) => `${a}${delimiter}${b}`);
}

const checkDelimiter = delimiter => delimiter ? delimiter : " ";

module.exports = {
    morseToEnglish: morseToEnglish,
    englishToMorse: englishToMorse,
    checkDelimiter: checkDelimiter
}