function countingValleys(steps, path) {
    const paths = path.split("");
    let valleyCounter = 0;
    let level = 0;
    let isValley = false;
    paths.forEach(path => {
        path === "U" ? level++ : level--;
        if(level < 0 && !isValley){
            valleyCounter++;
            isValley = true;
        }
        else if(level >= 0 && isValley){
            isValley = false;
        }
    });
    return valleyCounter;
}