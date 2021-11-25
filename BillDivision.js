function bonAppetit (bill, k, b){
    let anna = 0;
    bill.map((price,index) => {
        if(index !== k) anna += price/2;
    });
    anna = parseInt(""+anna);
    (b - anna === 0) ? console.log("Bon Appetit") : console.log(b-anna);
}
bonAppetit([3,10,2,9],1,12);