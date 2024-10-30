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


//셀프로 테스트 만들기
//test , expect, toBe 를 사용해서 factorial , prime 을 테스트하기

test("factorial([15]) must be 1,307,674,368,000", () => {
    expect(lib.factorial([15])).toBe(1307674368000);
})

test("factorial([6]) must be 720", () => {
    expect(lib.factorial([6])).toBe(720);
})


test("prime([17]) must be true", () => {
    expect(lib.prime([17])).toBe(true);
})

test("prime([16]) must be false", () => {
    expect(lib.prime([16])).toBe(false);
})
