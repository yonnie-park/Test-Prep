function solution(s) {
    let zeroCount=0,
        changeCount=0,
        newbin
    
    function change(num){
        while(num.length!=1){
            let arr=num.split('')
            for(let i=0; i<arr.length; i++){
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

console.log(solution("110010101001"))