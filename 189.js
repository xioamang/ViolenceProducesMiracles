var rotate = function (nums, k) {
    let str = ''
    let copy = nums.concat([]);
    let temp = 0
    k = k % nums.length
    if (k >= 0) {
        for (let i = 0; i < nums.length; i++) {
            if (i + k < nums.length) {
                nums[i + k] = copy[i]
            }
            else {
                nums[k - nums.length + i - temp] = copy[i]
            }
        }
        return nums
    }


    return nums
};

let a = [-1]
let k = 3

console.log(rotate(a, k));
