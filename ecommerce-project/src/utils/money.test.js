import { it, expect, describe } from "vitest";
import formatMoney from "./money";

describe("formatMoney", () => {
  it('formats 1999 cents as "$19.99"', () => {
    const result = formatMoney(1999);
    expect(result).toBe("$19.99");
  });
  it("displays 2 decimals", () => {
    const result = formatMoney(1090);
    expect(result).toBe("$10.90");
    expect(formatMoney(1000)).toBe("$10.00");
  });
});
