const singleNumber = nums => {
    return nums.reduce((sum, current) => (sum ^= current));
  };

let nums=[1,1,1,4,4,2,3,3,3]
console.log(singleNumber(nums))