function isValidSubsequence(array, sequence) {
    let seqIndex = 0;
    array.forEach(num => {
        if (num === sequence[seqIndex])
            seqIndex++;
    })

    return seqIndex === sequence.length;
}