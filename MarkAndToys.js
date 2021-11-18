function maximumToys(prices, k) {
    prices.sort((i,j)=>{
        return i-j;
    });
    let tempToys = 0;
    prices.map(price => {
        if(k-price >=0){
            k-=price;
            tempToys++;
        }
    });
    return tempToys;
}