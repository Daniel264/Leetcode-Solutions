/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let firstSlice = nums1.slice(0, m);
    let secondSlice = nums2.slice(0, n);
    merged = firstSlice.concat(secondSlice);
    merged.sort();

    for (let i = 0; i < merged.length; i++) {
        nums1[i] = merged[i];

    }
    console.log(nums1);

};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);