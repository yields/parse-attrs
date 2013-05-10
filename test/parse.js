
describe('parse(attrs)', function(){

  var parse = require('parse-attrs');

  describe('foo="baz"', function(){
    it('should { foo: "baz" }', function(){
      assert('baz' == parse('foo="baz"').foo);
    })
  })

  describe("foo='baz'", function(){
    it("should { foo: 'baz' }", function(){
      assert('baz' == parse("foo='baz'").foo);
    })
  })

  describe('foo=baz', function(){
    it('should { foo: baz }', function(){
      assert('baz' == parse('foo=baz').foo);
    })
  })

  describe('foo', function(){
    it('should { foo: "" }', function(){
      assert('' == parse('foo').foo);
    })
  })

  describe('foo bar baz', function(){
    it('should { foo: "", baz: "", bar: "" }', function(){
      var attrs = parse('foo bar baz');
      assert('' == attrs.foo);
      assert('' == attrs.bar);
      assert('' == attrs.baz);
    })
  })

  describe('foo=bar baz="foo bar" bar=\'baz\'', function(){
    it('should { foo: bar, baz: foo bar, bar: baz }', function(){
      var attrs = parse('foo=bar baz="foo bar" bar=\'baz\'');
      assert('bar' == attrs.foo);
      assert('baz' == attrs.bar);
      assert('foo bar' == attrs.baz);
    })
  })

  function assert(expr, ms){
    if (!expr) throw new Error(ms || 'fail');
  }
})
