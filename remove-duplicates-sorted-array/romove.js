/* 
                       Two pointer technique wit sorted array
                       Time Complexity O(N)  Space Complexity O(1)                      
  */
const remove = (array)=>{
    let slow = 0;
    for(let fast = 0;fast<array.length;fast++){  //O(N)
         if(array[slow] != array[fast]){   //O(1)
            slow +=1;    //O(1)
            [array[slow],array[fast]]=[array[fast],array[slow]];//O(1)
         }
    }
    return slow + 1;
}

let a = [0,0,1,1,1,2,2,3,3,4];
console.log(remove(a));



