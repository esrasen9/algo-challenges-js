function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles);
    let temp =0 ;
    candles.map(candleHeight => {
        if(candleHeight === maxHeight){
            temp++;
        }
    });
    return temp;
}