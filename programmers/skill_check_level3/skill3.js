function solution(A, B) {
    A.sort((a,b)=>b-a)
    B.sort((a,b)=>b-a)
    let count=0
    let j=0
    for(let i=0; i<A.length; i++){
        if(A[i]<B[j]){
            count++
            j++
        }
    }
    return count
}
const A=[5,1,3,7]
const B=[2,2,6,8]
console.log(solution(A,B))