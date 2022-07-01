/*
                                TWO POINTER TECHNIQUE STARTING FROM THE END & PUSH() & DELETING
                                TIME COMPLEXITY =O(N)   SPACE COMPLEXITY O(1)
                                
*/


const movezereos=(array)=>{
    for(let fast = array.length-1;fast>=0;fast--)  //O(N)
    {
        if(array[fast] === 0)   //O(1)
        {
            array.push(0);      //O(1)
            array.splice(fast,1); //O(N)
        }
    }
    return array;
    //===>O(N)+O(N) + 0(1)+0(1) = O(2N) + 0(1) =>O(N)
}


let a= [0,1,0,3,12];
console.log( movezereos(a))

/*
                    TWO POINTERS TECHNIQUE FROM THE FRONT  
                     TIME COMPLEXITY =O(N)   SPACE COMPLEXITY O(1)

*/

const movezereos=(array)=>{
    let slow = 0
    for(let fast = 0;fast < array.length;fast++)  //O(N)
    {
        if(array[fast] != 0)   //O(1)
        {
            [array[slow],array[fast]] = [array[fast],array[slow]];//O(1)
            slow++; //O(1)
        }
    }
    return array;
    //===>O(N)+O(1) + 0(1)+0(1) = O(N) + 0(3*1) =>O(N)
}


let a= [0,1,0,3,12];
console.log( movezereos(a))