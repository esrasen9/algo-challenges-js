function miniMaxSum(arr) {
    let maxTotal=0;
    let minTotal=0;

    arr.sort().map((num,index) => {
        if(index!== 0){
            maxTotal += num;
        }
        if(index!== 4){
            minTotal += num;
        }
    });
    console.log(minTotal , maxTotal);
}