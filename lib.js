function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}

function prime(num) {
    if (num <= 1) // 1이하
        return false;

    if ((num / 2) === 0) {//짝수
        return false;
    }

    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            //자신을 제외한 나머지들로 나눴을 때
            //나머지가 0이라면
            return false;
        }
    }
    return true;
}

function factorial(num) {

    let fac = 1;
    if (num === 1 || num === 0) {
        return 1;
    }
    else if (num < 0) {
        return -1;
    }
    else {
        for (let i = 0; i < num; i++) {
            fac = fac * (num - i);
        }
        return fac;
    }

}

module.exports = {
    avg,
    prime,
    factorial
}
//exports.avg = avg;
//exports.prime = prime;
//exports.factorial = factorial;
