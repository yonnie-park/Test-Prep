function solution(survey, choices) {
    // choices에 의한 점수 결과를 기록하기 위한 객체
    let test = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    };

    
    let ans = "";
    
   
    for(let i = 0; i < survey.length; i++){
       
        let [no, yes] = survey[i].split("");
        
        // survey[i]에 대한 유저의 선택값
        let grade = choices[i]
        
        if(grade === 4){
           
            continue;
        } else if(grade < 4){

            test[no] += (4 - grade);
        } else if(grade > 4){

            test[yes] += (grade - 4);
        }
    }
    
    if(test["R"] > test["T"]){
        ans += "R";
    } else if(test["R"] < test["T"]){
        ans += "T";
    } else {
        ans += ["R","T"].sort()[0];
    }
    
    if(test["C"] > test["F"]){
        ans += "C";
    } else if(test["C"] < test["F"]){
        ans += "F";
    } else {
        ans += ["C","F"].sort()[0];
    }
    
    if(test["J"] > test["M"]){
        ans += "J";
    } else if(test["J"] < test["M"]){
        ans += "M";
    } else {
        ans += ["J","M"].sort()[0];
    }
    
    if(test["A"] > test["N"]){
        ans += "A";
    } else if(test["A"] < test["N"]){
        ans += "N";
    } else {
        ans += ["A","N"].sort()[0];
    }
    
    return ans;
}