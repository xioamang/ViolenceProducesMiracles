
var sortedSquares = function (nums) {
    let str = ''
    nums.forEach((a) => {
        a = a * a
        str = str + a + 't'
    });
    str = str.substring(0, str.length - 1);
    return str.split('t').sort((a, b) => {
        return a - b
    })
};
let a = [-4, -1, 0, 3, 10]

console.log(sortedSquares(a));
