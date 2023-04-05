
var dailyTemperatures = function (temperatures) {
    let len = temperatures.length
    let str = ''
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (temperatures[j] >= temperatures[i]) {
                let num = j - i
                str = str + num
                console.log(str + '存在');
                break
            }
            else if (j === len - 1) {
                str = str + '0'
                console.log(str);
                break
            }
        }
    }
    str = str + '0'
    return str.split('')
}
let a = [73, 74, 75, 71, 69, 72, 76, 73]

console.log(dailyTemperatures(a));
