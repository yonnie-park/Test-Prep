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

    let result = ""; //"TCMA" string
    
   
    for(let i = 0; i < survey.length; i++){
        let [no, yes] = survey[i].split("");
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

/*

****다른분 문제풀이****

function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    // 일일이 지정해서 객체를 만든게 아니라 자동으로 객체를 만드셨다.
    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    // 
    choices.forEach((choice, index) => {
        // 이렇게 해도 하나의 문자열이 나눠지는구나!
        const [disagree, agree] = survey[index];

        // chice의 값에 따라 성향을 나눠, 위에서 만든 MBTI 객체의 key값에 넣어준다
        // 점수 환산 로직에 맞춰서 산술한 값을 누적합 한다.
        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    // map에서도 이런 방식으로 하나의 문자열을 a, b로 나눌 수 있구나..!
    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}*/