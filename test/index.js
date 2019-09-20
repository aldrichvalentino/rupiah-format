const formatCurrency = require("../index");
const assert = require("assert");

describe("Format Currency Test", () => {
  it("should format currency", done => {
    assert.equal(formatCurrency(123), "Rp123,00");
    assert.equal(formatCurrency(12345), "Rp12.345,00");
    assert.equal(formatCurrency(123456), "Rp123.456,00");
    assert.equal(formatCurrency(1234567), "Rp1.234.567,00");
    done();
  });
});
