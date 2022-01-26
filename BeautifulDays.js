function beautifulDays(i, j, k) {
    let res = 0;
    for (let day = i; day <= j; day++) {
        const reverseDay = parseInt(day.toString().split("").reverse().join(""));
        if (Math.abs(reverseDay - day) % k === 0) res++;
    }
    return res;
}