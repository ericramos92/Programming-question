
/*
                Two pointers technique
                Time complex O(N) and  Space complex O(1)
*/



var twoSum = function(array, target) {


    let start = 0;
    let end = array.length - 1;
    
    while(start <= end){
      
        if((array[start] + array[end]) === target){
            
            return [start+1,end+1]; //needs to add one to index
            
        }
        else if((array[start] + array[end]) > target){
            end --;
        }
        else if((array[start] + array[end]) < target){
            start++;
        }
       
    }
            
        
    
};

let numbers = [1,2,7,15] 
let target = 9
console.log(twoSum(numbers,target));

