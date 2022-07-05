/*
                Brute Force Approach
                Time Complexity O(N logN) Space O(N) 

*/
const squares=(array)=>{
    
    for(let i = 0;i < array.length;i++){ //O(N)
        array[i]*= array[i];
   }
    array.sort((a,b) =>{
        return b - a;   //ascending order Time 0(N log N) & space O(N)
    });
    return array;
}

let a = [-4,-1,0,3,10]
console.log(squares(a))


/*
                Two pointer Technique
                 Time Complexity O(N) Space O(N) 

*/

const squares=(array)=>{
    const newarray =[];  // space O(N)
    let position = array.length-1
    let end = array.length-1;
    let start = 0;
    while(start <= end){ // O(N)
        if(Math.abs(array[end]) > Math.abs(array[start])){  // O(1)
            newarray[position] = array[end] * array[end];
            position --;
            end--;
        }
        else{
            newarray[position] = array[start] * array[start];  //O(1)
            position--;
            start ++;
        }
    }
    return newarray;
}

let a = [-7,-3,2,3,11]
console.log(squares(a))
