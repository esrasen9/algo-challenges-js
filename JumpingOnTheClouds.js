function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;
    const {length} = c;
    while(i < length-1){
        if(i+2 == length || c[i+2]==1){
            i++;
        }
        else {
            i+=2;
        }
        jumps++;
    }
    return jumps;
}