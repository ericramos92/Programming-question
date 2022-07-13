/*
                        Brute Force
                    Time O(N^3) Space O(1)
*/
const threesum=(array)=>{
    let results = [];
    array.sort((a,b)=>{  //O(N log(N))
        return a-b
    })
    for(let i = 0;i<array.length;i++){  //O(N)
        if(i > 0 && array[i] == array[i-1]){//checks for duplicates at middle
            continue;
        }
        for(let j = i+1;j<array.length;j++){//O(N)
            if(j > i+1 && array[j] == array[j-1]){//checks for duplicates at start
                continue;
            }
            for(let k = j+1;k<array.length;k++){//O(N)
                if(k > j+1 && array[k] == array[k-1]){ //checks for duplicates at end
                    continue;
                }
                if(array[i]+array[j]+array[k] === 0){
                    results.push([array[i],array[j],array[k]])
                    
                }
            }
        }
    }
    return results;
}


/*
                        Two pointer
                    Time O(N^2) Space O(1)
*/


const threesum=(array)=>{
    array.sort((a,b)=>{//n log n  [-4,-1,-1,0,1,2]
        return a-b;
    })
    const results=[];
    for(let i = 0;i<array.length;i++){
        let left = i+1;
        let right = array.length - 1;
        if(i>0 && array[i] === array[i -1]){ continue}
        while(left<right){
            let sum = array[left]+ array[right] + array[i];
            if(sum === 0){
                results.push([array[i],array[left],array[right]])
                left ++; 
                right --;
                while(left<right && array[left] == array[left - 1]){ //[-2,-2,0,0,2,2] the left moves to the right, it checks at the beginning for duplicates
                    left++
                }
                while(left < right  && array[right] == array[right +1]){//[-2,-2,0,0,2,2] the right moves to the left, it checks at the end for duplicates
                    right++;
                }  
                
            }
            else if(sum > 0){
                right --;
            }
            else if(sum < 0){
                left ++;
            }
        }
    }
    return results;
}

let a = [-2,0,0,2,2];
// let a = [0,0,0,0];
let s =threesum(a);
console.log(JSON.stringify(s));

