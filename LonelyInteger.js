function findLonely(arr) {
    let unique;
    arr.map((num,index) => {
        const tempArr = arr.filter((item,i) => i !== index )
        if(!tempArr.includes(num)){
            unique = num;
        }
    });
    return unique;
}