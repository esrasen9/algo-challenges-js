function squares(a,b) {
    const num1 =  Math.ceil(Math.sqrt(a));
    const num2 =  Math.floor(Math.sqrt(b));
    return (num2-num1)+1;
}