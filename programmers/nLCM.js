function getGcd(a, b) {
    if (b === 0) return a;
    return getGcd(b, a % b);
}

function solution(arr) {
    return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

console.log(solution([1, 2, 5, 4, 3]))