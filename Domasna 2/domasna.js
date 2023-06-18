//*Zadaca 1

const c2f = function (celsius) {
    return (celsius * 1.8) + 32
}

const f2c = (fahrenheit) => (fahrenheit - 32) * 0.556


// * Zadaca 2

const plostina = (a, b, c) => {
    var s = (a + b + c) / 2
    return Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

}

//* Zadaca 3

const pravoagolnikParametar = (a, b) => {
    return 2 * (a + b)
}
const pravoagolnikPlostina = (a, b) => {
    return a * b
}

//* Zadaca 4

const broj = (broj) => { return (broj % 2 == 0) ? "paren" : "neparen"; }


module.exports = {
    c2f,
    f2c,
    plostina,
    pravoagolnikParametar,
    pravoagolnikPlostina,
    broj,
};