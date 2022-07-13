/*
                two pointer technique
                Time complexity O(N) Space complexity O(1);


*/
const removeDuplicates=(array)=>{
    let slow = 2;
    for(let fast =2;fast<array.length;fast++){
        if(array[fast] != array[slow-2] ){
            array[slow] = array[fast];
            slow ++;
        }
    }
    return slow;
};

let a = [1,1,1,2,2,3];
expected_answer = [1,1,2,2,3];
let k = removeDuplicates(a);
let f =[];
for(let i =0;i<k;i++){
    if(a[i] !=expected_answer[i]){
        console.log('not the same');
    }
    else{
        f.push(a[i]);
    }
}
console.log(f);


/*

*/

const removeDuplicates=(nums)=>{
    let count = 1;
    // for(i<nums.length;i++) {
    let i=1, length = nums.length;
    while(i<length) {
        if(nums[i] == nums[i-1]) {
           count++;
            if(count > 2) {
               nums.splice(i,1);
                i=i-1;
                length--;
            }
        } else {
            count = 1;
        }
        i++;
    }
    return length;
};


let a = [1,1,1,2,2,3];
expected_answer = [1,1,2,2,3];
let k = removeDuplicates(a);
let f =[];
for(let i =0;i<k;i++){
    if(a[i] !=expected_answer[i]){
        console.log('not the same');
    }
    else{
        f.push(a[i]);
    }
}
console.log(f);