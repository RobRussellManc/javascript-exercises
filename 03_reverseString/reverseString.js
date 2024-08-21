const reverseString = function(userString) {
    let outputString = '';
    let reversedArray = [];
    let stringLength = userString.length;
    // Loop over string and add characters to the array
    for (let i=0; i<stringLength; i++) {
        reversedArray.unshift(userString[i])
    }
    // Add the letters back into a string
    for (let i=0; i<stringLength; i++) {
        outputString += reversedArray[i]
    }
    return outputString;
}

// Do not edit below this line
module.exports = reverseString;
