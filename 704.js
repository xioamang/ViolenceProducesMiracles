var num = [2, 3, 4, 5]
var targets = 5
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        if (nums[mid] === target) {
            return mid
        }
        else if (nums[mid] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return -1
};
console.log(search(num, targets));
