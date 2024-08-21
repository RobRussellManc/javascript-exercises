const repeatString = function(user_string, repeat_times) {
    let output = '';
    if (repeat_times < 0) {
        return "ERROR"
    } else { 
    for (i=0; i < repeat_times; i++) {
        output = output + user_string
    }}
    return output;
};

// Do not edit below this line
module.exports = repeatString;
