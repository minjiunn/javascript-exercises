const removeFromArray = function(arr, ...vals) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!vals.includes(arr[i])) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
};

// Do not edit below this line
module.exports = removeFromArray;
