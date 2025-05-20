function containsDuplicate(nums: number[]): boolean {
    const numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return true
        } else {
            numSet.add(num);
        }
    }
    return false;
};