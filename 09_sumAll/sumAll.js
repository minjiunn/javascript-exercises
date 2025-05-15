const sumAll = function(start, end) {
    if(!(typeof start === 'number') || !(typeof end === 'number')) {
        return "ERROR";
    } // this statement is not needed bc the Integer check alr handles it
    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    } 
    if (start < 0 || end < 0) {
        return "ERROR";
    }

    let min;
    let max;

    if (start <= end) {
        min = start;
        max = end;
    } else {
        min = end;
        max = start;
    }

    sum = 0;
    for (let i = min; i <= max; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
