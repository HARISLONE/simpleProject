// find odd numbers in the array.

let arr = [1,3,4,6,9,4];
let arr1 = [];
for(let i = 0; i<arr.length;i++){
    if(arr[i] % 2 === 1){
        arr1.push(arr[i]);
    }
}
console.log(arr1);