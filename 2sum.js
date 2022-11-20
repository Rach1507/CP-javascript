let twoSum = (nums, target) => {
    
    let map = new Map();
    
    for(let i= 0;i< nums.length;i++)
        map.set(nums[i],i);
    
    for(let i= 0;i< nums.length;i++)
    {
        diff = target - nums[i];
        if(map.has(diff) && map.get(diff)!= i)
            return [i , map.get(diff)]
    }
    
}