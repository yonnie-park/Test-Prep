/* 

프로그래머스 데브매칭 리뷰

인풋값1: 지하철 노선도 [[1,2,3,4,5],[2,6,7,8,9]] 숫자는 역 이름 표시
인풋값2: 시작 역
인풋값3: 도착 역

문제: 2번역에서 9번역으로 가는 최소 환승은 몇번?
*/

function solution(arr, start, dest){
    //역 개수
    let stations=[]
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            stations.push(arr[i][j])
        }
    }
    let stationsNum=stations.length
    stations=[...new Set(stations)]
    /* 그래프는 이런식으로 만들어져야됨
    let graph={
        1: [2],
        2: [1,3,6],
        3: [2,4],
        4: [3,5],
        5: [4],
        6: [2,7],
        7: [6,8],
        8: [7,9],
        9: [8]
    }*/
    let graph={}
    for(let i=0; i<stations.length; i++){
        graph[stations[i]]=[]        
    }
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j-1]) graph[arr[i][j]].push(arr[i][j-1])
            if(arr[i][j+1]) graph[arr[i][j]].push(arr[i][j+1])
        }
    }
    console.log(graph)

    let visited=Array.from({length: stations.length+1}, ()=>0)
    let path=[]

    function DFS(v)

    return path
}

let arr=[[1,2,3,4,5],[2,6,7,8,9]]
let start=2
let dest=9
console.log(solution(arr, start, dest))