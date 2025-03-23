const divideArray = (nums) => {
    nums.sort();
    for (i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return false;
        }
    }

    return true;
};