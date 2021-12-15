function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    let result = 0;
    redShirtSpeeds.sort((a, b) => a - b);
    fastest ?
        blueShirtSpeeds.sort((a, b) => b - a)
        : blueShirtSpeeds.sort((a, b) => a - b);

    redShirtSpeeds.forEach((red, idx) => {
        const blue = blueShirtSpeeds[idx];
        result += Math.max(red, blue);
    })

    return result;
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));