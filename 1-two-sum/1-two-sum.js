var twoSum = function (nums, target) {
  let s = new Set();

  for (let i = 0; i < nums.length; ++i) {
    //this assigns a temp number to see what the total is when you subtract the target number and the number in the array. we will check temp against each number in the new set below.
    let temp = target - nums[i];
    console.log(temp);

    // checking for condition, if the number in the new set equals to temp (the target minus the number we found in the array that we are iterating over)
    if (s.has(temp)) {
      //find the indice of the accepted number in the nums array
      let firstNum = nums.indexOf(temp, 0);
      console.log(firstNum);
      console.log(
        "Pair with given sum " +
          target +
          " is (" +
          nums[i] +
          " at indice " +
          i +
          " and " +
          temp +
          " at indice " +
          firstNum +
          ")"
      );
      //return the two indices when they are found.
      return [firstNum, i];
    }
    //this will loop through the nums array and add each value to the new set.
    s.add(nums[i]);
  }
};

twoSum([2, 7, 11, 15], 9);
//expected output: [0, 1]