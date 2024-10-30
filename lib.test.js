const { test, expect } = require("@jest/globals");
const lib = require("./lib");

//test에 넣는 건 그냥 이름
//expect에 넣는게 실제 테스트 할 것
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
    //expect안에 실험 하고 싶은 것 넣기
    //예상결과를 toBe()안에 넣기
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});