function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    apples.forEach(apple => {
        if (apple + a >= s && apple + a <= t) appleCount++;
    });
    oranges.forEach(orange => {
        if (orange + b <= t && orange + b >= s) orangeCount++;
    });

}