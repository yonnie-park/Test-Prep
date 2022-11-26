function solution(id_list, k) {
    let arr=[]
    for(let i=0; i<id_list.length; i++){
        id_list[i]=id_list[i].split(" ")
        let arr2=[]
        for(let j=0; j<id_list[i].length; j++){
           if(!arr2.includes(id_list[i][j])) arr2.push(id_list[i][j])
        }
        arr.push(arr2)
    }

    let result={}
    for(let i of arr){
        for(let j of i){
            if(!result[j]) result[j]=0
            if(result[j]<k) result[j]++
        }
    }
    let ans= Object.values(result).reduce((i,e)=>i+e,0)
    return ans
}
let id_list=["A A A B C D", "A D", "A B D"]
console.log(solution(id_list,2))