function solution(N) {
    let gaps = generateBinaryCode(N).split("1");
    gaps.sort((a,b) => b.length - a.length);
    return gaps.length > 2 ? gaps[0].length : 0;
}

function generateBinaryCode(dec) {
  return (dec >>> 0).toString(2);
}