const removeFromArray = function(inputArray, ...toRemove) {
    const arrayLength = inputArray.length;
    const outputArray = [...inputArray];
    for (let i=0; i < arrayLength; i++) {
        for (let j=0; j < toRemove.length; j++) {
            if (inputArray[i] === toRemove[j]) {
                let index = outputArray.indexOf(toRemove[j]);
                outputArray.splice(index, 1);
            }
        }
    }
    return outputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
