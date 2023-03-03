function nextGreatestLetter(letters, target) {
    let len = letters.length;
    // target 大于 letters 里面的最大值，直接返回第一项
    if (target >= letters[len - 1]) return letters[0];
    let left = 0;
    let right = len - 1;
    // 可以看成求 小于等于 target 区间的右边界，如果左边大于右边就跳出
    let i = 0
    while (left <= right) {
        //js转换数据成整数
        // let mid = left + parseInt((right - left) / 2);
        let mid = left + (right - left >> 2)
        if (letters[mid] <= target) {
            // 边界右移
            left = mid + 1;
        } else if (letters[mid] > target) {
            //边界左移
            right = mid - 1;
        }
        i++
        console.log(i);
    }
    return letters[left];
};
console.log(nextGreatestLetter(['c', 'e', 'f', 'g', 'g', 'g', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'q', 'r', 'w'], 'm'));
//parseInt()只取整数部分
//parsefloat()只取小数部分