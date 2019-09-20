# rupiah-format

## Synopsis
Tiny library that converts standard number into Indonesian rupiah format.

## Installation
```sh
npm install git+https://git@github.com/aldrichvalentino/rupiah-format.git
```

## Code Example
```js
// require library
const formatCurrency = require('rupiah-format');

// convert number
const number = 1000000;
const rupiah = formatCurrency(number);

console.log(rupiah);
// Rp1.000.000,00
```

## Options
```js
formatCurrency(1500000, {
  prefix: 'IDR ',
  delimiter: ',',
  useSuffix: false,
});
// IDR 1,500,000
```

Validator                       | Description
--------------------------------| --------------------------------------
**prefix**                      | Defaults to "`Rp`".
**delimiter**                   | Defaults to "`.`".
**useSuffix**                   | If true, adds a suffix or a custom suffix to the end of the string.
**customSuffix**                | Defaults to "`,00`" 

## Test
```
npm test
```

## License
MIT