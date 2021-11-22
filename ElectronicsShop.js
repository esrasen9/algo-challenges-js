function getMoneySpent(keyboards, drives, b) {
    return keyboards.reduce((acc, curr) =>
            Math.max(acc, ...drives.map(usb => usb + curr)
                .filter(total => b >= total)), -1);
}