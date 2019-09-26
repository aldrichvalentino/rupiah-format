const formatCurrency = require("../index");
const { create } = require("../index");
const assert = require("assert");

describe("Format Currency Test", () => {
  it("should format currency", done => {
    assert.equal(formatCurrency(123), "Rp123,00");
    assert.equal(formatCurrency(12345), "Rp12.345,00");
    assert.equal(formatCurrency(123456), "Rp123.456,00");
    assert.equal(formatCurrency(1234567), "Rp1.234.567,00");
    done();
  });

  it("should have custom prefix", done => {
    assert.equal(
      formatCurrency(123456, {
        prefix: "IDR "
      }),
      "IDR 123.456,00"
    );
    done();
  });

  it("should have custom delimiter", done => {
    assert.equal(
      formatCurrency(123456, {
        delimiter: ","
      }),
      "Rp123,456,00"
    );
    done();
  });

  it("should have custom suffix", done => {
    assert.equal(
      formatCurrency(123456, {
        customSuffix: ",-"
      }),
      "Rp123.456,-"
    );
    done();
  });

  it("should not add suffix", done => {
    assert.equal(
      formatCurrency(123456, {
        useSuffix: false
      }),
      "Rp123.456"
    );
    done();
  });

  it("should format with all options", done => {
    assert.equal(
      formatCurrency(5000000, {
        delimiter: ",",
        prefix: "IDR ",
        useSuffix: false
      }),
      "IDR 5,000,000"
    );

    assert.equal(
      formatCurrency(450000, {
        prefix: "Rp ",
        useSuffix: true,
        customSuffix: ",-"
      }),
      "Rp 450.000,-"
    );
    done();
  });
});

describe("Create Instance test", () => {
  it("should create instance", done => {
    const formatter = create({});
    assert.notEqual(formatter, null);
    done();
  });

  it("should format with the given options", done => {
    const formatter = create({
      delimiter: "/",
      prefix: "Te"
    });
    assert.equal(formatter(5000), "Te5/000,00");
    done();
  });

  it("should format with default options", done => {
    const formatter = create();
    assert.equal(formatter(15000), "Rp15.000,00");
    done();
  });
});
