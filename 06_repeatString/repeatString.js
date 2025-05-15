const repeatString = function(string, num) {
    if (num < 0) {return "ERROR";};
    var curr_string = "";
    for (let i = 0; i < num; i++) {
        curr_string += string;
    }
    return curr_string
};

// Do not edit below this line
module.exports = repeatString;
