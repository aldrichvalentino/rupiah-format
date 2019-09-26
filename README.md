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
const formatCurrency = require("rupiah-format");

// convert number
const number = 1000000;
const rupiah = formatCurrency(number);

console.log(rupiah);
// Rp1.000.000,00
```

## Options

```js
formatCurrency(1500000, {
  prefix: "IDR ",
  delimiter: ",",
  useSuffix: false
});
// IDR 1,500,000
```

| Validator        | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| **prefix**       | Defaults to "`Rp`".                                                 |
| **delimiter**    | Defaults to "`.`".                                                  |
| **useSuffix**    | If true, adds a suffix or a custom suffix to the end of the string. |
| **customSuffix** | Defaults to "`,00`"                                                 |

## Instance Creator

You can create a formatter instance with custom configs.

```js
// rupiahFormatter.js
const { create } = require("rupiah-format");

exports = create({
  prefix: "Rp.",
  delimiter: ",",
  customSuffix: ",-"
});
```

Then, import and use it on your file like this.

```js
// MyComponent.jsx
import rupiahFormatter from './rupiahFormatter';

...
  state = {
    value: 10000,
  };

  render() {
    return (
      /* Rp.10,000,- */
      <span>{rupiahFormatter(this.state.value)}</span>
    );
  }
...
```

## Test

```
npm test
```

## License

MIT
