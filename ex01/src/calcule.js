const au = 149597870;

export default (input) => {
    return parseFloat((au * input).toFixed(2));
}