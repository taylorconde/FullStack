const au = 149597870;

module.exports = {
    unidadeAstroToQuilometro: (input) => {
        return parseFloat((au * input).toFixed(2));
    }
};