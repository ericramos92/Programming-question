
const sumsmaller=(array,target)=>{
    if(array.length === 0){
        return 0;
    }
    let total = 0;
    array.sort((a,b)=>{
        return a-b;
    });
    for(let i =0;i<array.length;i++){
        let left = i+1;
        let right= array.length -1;
        while(left < right){
            if(array[i]+array[left]+array[right] < target){
                total += right - left;
                left +=1;
            }
            else{
                right --;
            }
        }
    }
    return total;
};










let t =4;
let a = [3,1,0,-2];
console.log(sumsmaller(a,t));
