
const sum=(array,target)=>{
    array.sort((a,b)=> a-b); //sort the array
    let closestSum = array[0] + array[1]+ array[2];
    
    for(let i = 0;i<array.length;i++){
        let left = i+1;
        let right = array.length -1;
        while(left<right){
            let currentSum = array[i] + array[left]+array[right];
            if(currentSum > target){
                right --;
            }
            else{
                left ++;
            }
            if( Math.abs(target - currentSum) < Math.abs(target-closestSum)){
                closestSum = currentSum;
            }
        }
    }
    return closestSum;
};




const a = [-1,2,1,-4];
console.log(sum(a, 1));