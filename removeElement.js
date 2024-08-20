/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
*/
var removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      console.log(nums[i], i)
      nums.splice(i, 1)
    }
    else {

      i += 1
    }
  }

  console.log(nums);
  console.log(nums.length);


}
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);