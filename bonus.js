// LeetCode 136. Single Number
export function singleNumber(nums) {
  let result = 0;
  for (const n of nums) {
    result ^= n;
  }
  return result;
}
