
/**
 * Parse the given `attrs`.
 * 
 * @param {String} attrs
 * @return {Object}
 */

module.exports = function(attrs){
  var scan = key
    , ret = {}
    , len
    , at;

  while (scan = scan());
  return ret;

  /**
   * trim spaces.
   */
  
  function spaces(){
    attrs = attrs.trim();
  }

  /**
   * peek
   */
  
  function peek(){
    return attrs.charAt(0);
  }

  /**
   * consume `n`
   */
  
  function consume(n){
    attrs = attrs.substr(n);
  }

  /**
   * match `c`.
   */
  
  function match(c){
    len = attrs.indexOf(c);
  }

  /**
   * ` *(key) *=?`
   */
  
  function key(){
    if (!attrs.length) return;
    spaces();
    match('=');
    if (!~len) match(' ');
    if (!~len) len = attrs.length;
    at = attrs.substr(0, len);
    at = at.trim();
    ret[at] = ret[at] || '';
    consume(len);
    spaces();
    if ('=' == peek()) return value;
    if (peek()) return key;
  }

  /**
   * `= *?(?:['"])?(value )(?:['"])?`
   */
  
  function value(){
    if (!attrs.length) return;
    if ('=' == peek()) consume(1);
    spaces();
    var end = ' ';
    if ('"' == peek()) end = '"';
    if ("'" == peek()) end = "'";
    if (end.trim()) consume(1);
    match(end);
    if (!~len) len = attrs.length;
    var val = attrs.substr(0, len);
    ret[at] = val;
    consume(val.length + 1);
    return key;
  }

};
