function stringMessage() {
  return Array.prototype.join.call(arguments[0]," ");
};
console.log = (function(){
  let _a = console.log;
  return function() {
    localStorage.setItem('Last Log', stringMessage(arguments))
    return _a.apply(this,arguments);
  }
})();

console.info = (function(){
  let _a = console.info;
  return function() {
    localStorage.setItem('Last Info', stringMessage(arguments))
    return _a.apply(this,arguments);
  }
})();

console.warn = (function(){
  let _a = console.warn;
  return function() {
    localStorage.setItem('Last Warn', stringMessage(arguments))
    return _a.apply(this,arguments);
  }
})();

console.error = (function(){
  let _a = console.error;
  return function() {
    localStorage.setItem('Last Error', stringMessage(arguments))
    return _a.apply(this,arguments);
  }
})();

console.log("This is","LOG");
console.info("This is","INFO");
console.warn("This is","WARN");
console.error("This is","ERROR");
