
# parse-attrs

  attributes parser.

## Installation

    $ component install yields/parse-attrs

## Example

```js
assert('baz' == parse('foo="baz"').foo);
assert('baz' == parse("foo='baz'").foo);
assert('baz' == parse('foo=baz').foo);
assert('' == parse('foo').foo);
var attrs = parse('foo bar baz');
assert('' == attrs.foo);
assert('' == attrs.bar);
assert('' == attrs.baz);
var attrs = parse('foo=bar baz="foo bar" bar=\'baz\'');
assert('bar' == attrs.foo);
assert('baz' == attrs.bar);
assert('foo bar' == attrs.baz);
```

   

## License

  MIT
