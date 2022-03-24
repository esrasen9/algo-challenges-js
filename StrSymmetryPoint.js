function solution(S) {
  let half = Math.floor(S.length/2);
  let end = S.length-1;
  let res = 0;

  if(S.length % 2 === 0){
    return -1;
  }
  for(let i=0; i<half; i++){
    if(S[i] !== S[end]){
      return -1;
    }
    else {
      res++;
    }
    end--;
  }
  return res;
}