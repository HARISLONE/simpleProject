// pattern printing codes
// 1
// 1 2
// 1 2 3
// 1 2 3 4

let n = 4;
for(let i = 1; i<=n;i++){
    let row = "";
    for(let j = 1; j<=i;j++){
        row += j + " ";
    }
    console.log(row);
}