const searchInsert = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

//This solution is faster than other
//solution1 = 110ms solution2 = 55ms
const searchInsert2 = (nums, target) => {
    let head = 0;
    let tail = nums.length - 1;

    while (head <= tail) {
        let mid = Math.floor((head + tail) / 2);
        if (nums[mid] > target) {
            tail = mid - 1;
        } else if (nums[mid] < target) {
            head = mid + 1;
        } else {
            return mid;
        }
    }

    return tail + 1;
};