var reverse = function(x) {
    let arr=String(x).split('').reverse()
    if (x<0){
        arr.unshift('-')
        arr.pop()
    }
    if (arr[0]=='0'){
        arr.slice(1)
    }
    let output=arr.join('')
    return Number(output)
}

console.log(reverse(-123))
console.log(reverse(223))
console.log(reverse(3010))