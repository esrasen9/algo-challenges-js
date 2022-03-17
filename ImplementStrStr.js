const strStr = (haystack, needle) => {
    if (!needle) return 0;
    if (needle.length > haystack.length) return -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let hayStr = haystack.slice(i, i + needle.length);
            if (hayStr === needle) return i;
        }
    }
    return -1;
};