#!/usr/bin/env node

// #! -> shebang 문구, script 파일이 자체 실행하고 싶을 때
// interpreter 경로를 알아서 찾아주게
// 그대로 쳐요

//console.log(process.argv);
const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let cmd = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some((n) => isNaN(n))) {
    //some => numbers의 모든 요소 훑기. 하나라도 참이면 참
    //모두 참이어야 참인건 every
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (cmd) {
    case "avg":
        result = lib.avg(numbers);
        break;
    case "prime":
        result = lib.prime(numbers[0]);
        break;
    case "factorial":
        result = lib.factorial(numbers[0]);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);

}

console.log(result);