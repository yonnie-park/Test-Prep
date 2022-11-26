function solution(flowers) {
    let days=[]
    for(let i=0; i<flowers.length; i++){
        let start=flowers[i][0]
        let end=flowers[i][1]

        for(let j=start; j<end; j++){
            days.push(j)
        }
    }
    days=[...new Set(days)]
    return days.length
}

let flowers=[[2,5],[3,7],[10,11]]
console.log(solution(flowers))