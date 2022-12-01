var addTwoNumbers = function(l1, l2) {
     let num1=[]
     let num2=[]

   for(let i=l1.length-1; i>=0; i--){
        num1.push(l1[i])
   } 
   for(let i=l2.length-1; i>=0; i--){
        num2.push(l2[i])
   }

   let n1=Number(num1.join(''))
   let n2=Number(num2.join(''))

   let addNum= String(n1+n2)
   let addNumArr=addNum.split('')
   let output=[]
   for(let i=addNumArr.length-1; i>=0; i--){
     output.push(addNumArr[i])
   }
   return output

};
let l1=[1,2,3,4]
let l2=[1,4,2]
console.log(addTwoNumbers(l1,l2))