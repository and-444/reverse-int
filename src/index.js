module.exports = function reverse(n) {
    const numbers = parseInt(n.toString().split('').reverse().join(''))
    return numbers
}
