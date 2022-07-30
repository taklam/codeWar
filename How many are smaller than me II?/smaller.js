/*
  Write

  function smaller(arr)
  that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

  For example:

  smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
  smaller([1, 2, 0]) === [1, 1, 0]
  
  There will be a big array with about 80000 elements.
  This test have to be finished within 12s.
*/

// This challenge is hard.
// solution 1, binary search + insertion sort, O(n log n)
// This is the solution I come up with. Please check the comments below.

function smaller(arr) {
    const len = arr.length;
    const sortedArray = [];
    const ret = [];
    for (let i = len - 1; i >= 0; i--) {      // build the sorted array from the tail
        const val = arr[i];
        let idx = binarySearchIndex(sortedArray, val);  // use binary search to speed up sorted array search
        ret.unshift(idx);                     // the index from sorted array is the count of smaller elements
        sortedArray.splice(idx, 0, val);      // insert element to sorted array
    }
    return ret;

    function binarySearchIndex(array, value) {
        let low = 0,
            high = array ? array.length : low;

        while (low < high) {
            const mid = (low + high) >>> 1;
            ((array[mid]) < value)
                ? low = mid + 1
                : high = mid;
        }
        return low;
    }
}

// solution 2, binary indexed tree, O(log n)
// https://javascript.plainenglish.io/introduction-to-binary-indexed-tree-9e0a05271dec
// I met the above article when looking for a better solution.
const smaller = function (nums) {
    const max = Math.max(...nums), min = Math.min(...nums);
    const len = nums.length;
    const N = max - min + 2;
    const C = Array(N).fill(0);
    const ret = Array(len);

    for (let i = len - 1; i >= 0; i--) {
        ret[i] = sum(nums[i] - min);
        update(nums[i] - min + 1);
    }
    return ret;

    function update(i) {
        for (; i <= N; i += (i & -i))
            C[i] += 1;
    }

    function sum(i) {
        let ans = 0;
        for (; i > 0; i -= (i & -i))
            ans += C[i];
        return ans;
    }
};
