const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");//sub-process 소환

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "avg"]);//명령어 입력 case
    const outputs = [];

    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();//공백 지우기
        expect(output).toBe("Insufficient parameter!");
    });
});

test("Wrong command", () => {
    const main = spawn("node", ["main.js", "sum", "1", "2", "3"]);
    const outputs = [];

    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });

    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Wrong command!");
    });
});
