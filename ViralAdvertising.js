function viralAdvertising(n) {
    let people = 2;
    let likeCount = 2;
    for(let i=2; i<=n; i++){
        people = Math.floor((people * 3)/2);
        likeCount += people;
    }
    return likeCount;
}
console.log(viralAdvertising(3));