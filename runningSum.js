var runningSum = function(nums) {
    // let runningSumofNums = []

    for ( let i =0 ; i< nums.length ; i++){
        if (i == 0) {        
            currentSum = nums[i]
        }
        else {  
            currentSum = nums[i-1] +nums[i]
        }
        nums[i] = currentSum;
    }
    return nums
};


runningSum([1,2,3,4]);


// var runningSum = function(nums) {
//     let runningSumofNums = []

//     for ( let i =0 ; i< nums.length ; i++)
//         runningSumofNums.push(sum(nums , i));

//     return runningSumofNums
// };

// const sum = (nums , j ) =>{
//     let sumOfi = 0 ;
//     for ( let i = 0 ; i <= j ; i++)
//         sumOfi += nums[i];

//     return sumOfi
// }

// var runningSum = function(nums) {
//     let runningSumofNums = []

//     for ( let i =0 ; i< nums.length ; i++){
//         if (i == 0) {        
//             currentSum = nums[i]
//         }
//         else {  
//             currentSum = runningSumofNums[i-1] +nums[i]
//         }
//         runningSumofNums.push(currentSum);
//     }
//     return runningSumofNums
// };