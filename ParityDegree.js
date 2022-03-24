function solution(N) {
  let end = false;
  let i = 0;
  let max;
  while(!end){
    if(N % Math.pow(2,i) === 0){
      max = i;
    }
    if(Math.pow(2,i) > N){
      end = true;
    }
    i++;
  }
  return max;
}