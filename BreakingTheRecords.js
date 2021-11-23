function breakingRecords(scores) {
    let tempHighest = 0;
    let tempLower = 0;
    let max = scores[0];
    let min = scores[0];
    scores.map(score => {
        if(score > max){
            max=score;
            tempHighest++;
        }
        else if(score < min){
            min=score;
            tempLower++;
        }
    })
    return [tempHighest,tempLower];
}



