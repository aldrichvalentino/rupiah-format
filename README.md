# rupiah-format

## Synopsis

Converts standard number into Indonesian rupiah format.

## Installation
```sh
npm install git+https://git@github.com/aldrichvalentino/rupiah-format.git
```

## Code Example

```
// require library
const formatCurrency = require('rupiah-format');

// convert number
let number = 1000000;
let rupiah = formatCurrency(number);

console.log(rupiah);
// Rp1.000.000,00
```

## Options
Validator                       | Description
--------------------------------| --------------------------------------
**prefix**                      | Defaults to "`Rp`".
**delimiter**                   | Defaults to "`.`".
**useSuffix**                   | If true, adds a suffix or a custom suffix to the end of the string.
**customSuffix**                | Defaults to "`,00`" 

## Tests

```
npm test
```

## License

MIT