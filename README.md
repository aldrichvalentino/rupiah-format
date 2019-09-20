# rupiah-format

## Synopsis

Converts standard numbers into Indonesian rupiah format

## Installation

npm install

## Code Example

```
//require library
const formatCurrency = require('rupiah-format')

//convert number
let number = 1000000
let rupiah = formatCurrency(number)

console.log(rupiah)
// Rp1.000.000,00
```

## Tests

```
npm test
```

## License

MIT