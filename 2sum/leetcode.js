/*
    Brute-force  Time=> O(n^2)  Space =>O(1)
*/
const twosum = (array,target)=>{ 
    
    let index = [];
    for(let i =0;i<array.length;i++){
        // console.log(a[i]);
        // console.log('------')
        for(let j =i+1; j<array.length;j++){
            if((array[i] + array[j])=== target)
            {
                index.push(i,j);
                return index;
            }
        }
    }
    if(index.length===0){
        return -1;
    }
    }
    let al = [0,1,2,7,11];
    let tar =9;
    console.log(twosum(al,tar));




/*
                    Binary search  Time=> O(n) + (log n) => O(n log n)  Space =>O(1)
*/
const binarysearch =(a , target)=>{
    let start = 0;
    let end = a.length-1;

    while(start <= end){
        let mid=Math.floor((start + end)/2);
  
            // If element is present at mid, return True
            if (a[mid]===target){
                return mid;
            }
 
            // Else look in left or right half accordingly
            else if (a[mid] < target)
                start = mid + 1;
            else
                end = mid - 1;
        }
        return '';
}

const twosum = (array,target)=>{ 
    
    let index = [];
    for(let i =0;i<array.length;i++){
        let x = target - array[i];
        let compliment = binarysearch(array,x);
        console.log(compliment);
        if(typeof(compliment)=== 'number'){
            index.push(i,compliment);
            return index;
        }
    }
    return -1;
    }


let al = [0,1,2,10,11];
let tar =9;
console.log(twosum(al,tar));

/*
    Two-pointer technique  Time=> O(n)  Space =>O(1)
*/

const twosum = (array,target)=>{ 
    let index = [];
    let start = 0;
    let end = array.length-1;
    while(start <= end){
        if(array[start] + array[end] === target){
            index.push(start,end)
            return index
        }
        if(array[start] + array[end] > target)
        {
            end--;
        }
        else if(array[start] + array[end] < target){
            start++
        }

    }
    return -1;
    }


let al = [0,1,2,6,7];
let tar =9;
console.log(twosum(al,tar));


/*
                        Hash table are good when  you have unorder array
                        Time=> O(n)  Space =>O(n)
*/


const twosum = (array,target)=>{ 
    const hashtable ={};
    for(let i = 0; i<array.length;i++)
    {
        let complement = target - array[i];
        if(hashtable[complement] !== undefined)
        {
            return[hashtable[complement], i];
        }
        else
        {
            hashtable[array[i]] = i;
        }
        
    }



}
    
    
    let al = [0,1,2,6,7];
    let tar =9;
    console.log(twosum(al,tar));