function catAndMouse(x, y, z) {
    const distance1 = Math.abs(z-x);
    const distance2 = Math.abs(z-y);
    if(distance1 === distance2){
        return "Mouse C";
    }
    else{
        return (distance1 < distance2)
            ? "Cat A"
            : "Cat B";
    }
}
