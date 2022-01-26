function bigSorting(unsorted) {
    unsorted.sort((a, b) => {
        let diff = a.length - b.length
        if (diff !== 0)
            return diff;
        else
            return (BigInt(a) - BigInt(b) > 0) ? 1 : -1;
    });
    return unsorted;
}