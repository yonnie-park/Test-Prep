function solution1(s) { // 되는 풀이
    let answer = [0, 0]
    let sLen = 0
  
    while (s.length > 1) {
      sLen = s.length
      s = s.split("0").join("")
      answer[0]++
      answer[1] += (sLen - s.length)
      s = s.length.toString(2)
    }
  
    return answer
}


function solution(s) { // test case 반만됨 << 0이 연속으로 두개있을때 안지워지는거같아... 
  let zeroCount=0,
      changeCount=0,
      newbin

  function change(num){
      while(num.length!=1){
          let arr=num.split('')
          for(let i=arr.length-1; i>=0; i--){
              if(arr[i]==0){
                  arr.splice(i,1)
                  zeroCount++
              }
          }
          newbin=arr.length.toString(2)
          changeCount++
          num=newbin
      }
  }
  change(s)
  return [changeCount, zeroCount]
}
console.log(solution("11001010101"),solution1("11001010101"))
console.log(solution("1111111"),solution1("1111111"))
console.log(solution("01110"),solution1("01110"))
