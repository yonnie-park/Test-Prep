function solution(s, times) {
    let ans=1
    let t=[]
    s=s.split(":")
    for(let i=0; i<s.length; i++){
        s[i]=Number(s[i])
    }
    for(let i=0; i<times.length; i++){
        t.push(times[i].split(":"))
    }
    for(let i=0; i<t.length; i++){
        for(let j=0; j<t[i].length; j++){
            t[i][j]=Number(t[i][j])
        }
        t[i].unshift(0,0)
    }

    let dates=[]
    for(let i=0; i<t.length; i++){
        let date=[]
        let cur=dates[i-1]
        if(dates.length===0) cur=s
        for(let j=0; j<t[i].length; j++){
            date.push(cur[j]+t[i][j])
        }
        if(date[5]>59){
            date[4]+=Math.floor(date[5]/60)
            date[5]%=60
        }
        if(date[4]>59){
            date[3]+=Math.floor(date[4]/60)
            date[4]%=60
        }
        if(date[3]>23){
            date[2]+=Math.floor(date[3]/24)
            date[3]%=24
        }
        if(date[2]>30){
            date[1]+=Math.floor(date[2]/30)
            date[2]%=30
        }
        dates.push(date)
        
    }
    dates.unshift(s)

    for(let i=0; i<dates.length-1; i++){
        if(!(dates[i][2]+1===dates[i+1][2] || dates[i][2]===dates[i+1][2])){
            ans=0
        }
    }

    let ans2=dates[dates.length-1][2]-dates[0][2]+1
    return [ans, ans2]

}

let s="2021:04:12:16:08:35"
let times=["01:06:30:00", "01:01:12:00", "00:00:09:25"]
console.log(solution(s,times))

