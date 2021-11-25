function migratoryBirds(arr) {
    const map = arr.reduce((acc,curr) => acc.set(curr, (acc.get(curr) || 0) + 1), new Map());
    const max = Math.max(...map.values());
    let type = 5;
    [...map.entries()].map(e =>{
        if(e[1] === max && e[0] < type) type = e[0];
    });
    return type;
}