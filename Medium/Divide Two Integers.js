const divide = (dividend, divisor) => {
    let result = dividend / divisor;
    return result > 0 ? Math.floor(result) : Math.ceil(result);
};