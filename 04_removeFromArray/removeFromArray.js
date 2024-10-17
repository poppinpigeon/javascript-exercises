const removeFromArray = function(arr, ...toRemove) {
    for(let i=0; i < toRemove.length; i++){
        let indexToRemove = arr.indexOf(toRemove[i]);
        while(indexToRemove != -1){
            arr.splice(indexToRemove, 1);
            indexToRemove = arr.indexOf(toRemove[i]);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
