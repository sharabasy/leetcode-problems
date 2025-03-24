const divide = (dividend, divisor) => {
    let result = dividend / divisor;
    if (result > 2147483647) {
        return 2147483647;
    }
    if (result < -2147483648) {
        return -2147483648;
    }
    return parseInt(result);
};