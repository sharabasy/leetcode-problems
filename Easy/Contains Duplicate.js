"use strict";
function containsDuplicate(nums) {
    const numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        else {
            numSet.add(num);
        }
    }
    return false;
}
;
