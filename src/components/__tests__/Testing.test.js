import { sum } from "../Testing"


test("check the sum of 2 positive numbers",() => {
    expect(sum(2,5)).toBe(7)
})