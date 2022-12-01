function solution(id_list, report, k) {
    var answer = [];
  
    const reported = {};
    const user = {};
    const banned = [];
    for (let i of id_list) {
      reported[i] = [];
      user[i] = 0;
    }
    for (let i of report) {
      const reportId = i.split(' ');
      if (!reported[reportId[1]].includes(reportId[0]))
        reported[reportId[1]].push(reportId[0]);
    }
    for (let i in reported) {
      if (reported[i].length >= k) {
        banned.push(i);
      }
    }
    console.log(banned);
    for (let i of banned) {
      for (let j of reported[i]) {
        user[j]++;
      }
    }
    console.log(user);
    for (let i in user) {
      answer.push(user[i]);
    }
    return answer;
  }