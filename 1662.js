arrayStringsAreEqual = function (word1, word2) {
    console.log(join(word1) === join(word2))
}
const join = (words) => {
    let ret = ''
    for (const s of words) {
        ret += s
        console.log(ret);
    }
    return ret
}
arrayStringsAreEqual(["a", "b"], ["a", "cb"])
// 会用'+'把字符串拼接起来判断
//const在for in或者for of中的使用
//const声明的变量在一个块级作用域中是不能够重新赋值
//for in 和for of它们两个都是一种严格的迭代语句，对于对象中的每一个属性值，有一个指定的语句块被执行
//也就是每一次循环，都会产生一个块级作用域来完成每个变量的行为。
//然而for循环并不会遍历对象的属性，每一次循环都是在同个块级作用域中进行，使用const声明就会报错。