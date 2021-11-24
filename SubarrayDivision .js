function birthday(s, d, m ) {
    let result = 0;
    s.map((square,index) => {
        const total =
            s.slice(index,index+m).reduce((acc,curr)=>acc+curr,0);
        if(total === d) result++;
    })
    return result;
}

