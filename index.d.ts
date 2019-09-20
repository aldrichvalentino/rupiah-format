interface FormatOptions {
  prefix?: string;
  delimiter?: string;
  useSuffix?: boolean;
  customSuffix?: string;
}

/**
  * Function to format a number to Rupiah currency
 * @param number Amount of money in `integer`
 * @param options Formatter options
 * 
 * prefix: `string`, defaults to `Rp`
 * 
 * delimiter: `string`, defaults to `.`
 * 
 * useSuffix: `boolean`, if true, adds a suffix or
 * a custom suffix to the end of the string
 * 
 * customSuffix: `string`, defaults to `,00`
 */
declare function index(
  number: number,
  options?: FormatOptions
): string;

export = index;
