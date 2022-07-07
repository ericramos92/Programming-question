/*
            
                           Brute Force
            Time complicity O(N^2) space Complexity O(1)
*/
const area =(height)=>{
    max_area = 0;
    for(let slow = 0; slow<height.length;slow ++){            // O(N)
        for(let fast = slow + 1; fast<height.length;fast++){   //0(n)
            let area =(Math.min(height[slow],height[fast])*(fast - slow)) // O(N) because it compares all elements
            max_area = Math.max(max_area, area);
        }
    }
    return max_area;
};


let height = [1,8,6,2,5,4,8,3,7];
console.log(area(height));


/*
                                Two pointer technique
                    Time complicity O(N) space Complexity O(1)
*/

const area =(height)=>{
    let left = 0;
    let right = height.length - 1;
    let max_area = 0;
    while(left < right){  // O(N)
        let area = Math.min(height[left],height[right]) * (right - left); // O(N)
        max_area = Math.max(max_area, area); // O(N)
        if(height[left] < height[right]){// O(1)
            left ++;
        }
        else{
            right --;
        }
    }
    return max_area;
};


let height = [1,8,6,2,5,4,8,3,7];
console.log(area(height));