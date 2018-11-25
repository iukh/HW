function stringMessage() {
  return Array.prototype.join.call(arguments[0]," ");
};
console.log = (function(){
  let _tmpConsole = console.log;
  return function() {
    localStorage.setItem('Last Log', stringMessage(arguments))
    return _tmpConsole.apply(this,arguments);
  }
})();

console.info = (function(){
  let _tmpConsole = console.info;
  return function() {
    localStorage.setItem('Last Info', stringMessage(arguments))
    return _tmpConsole.apply(this,arguments);
  }
})();

console.warn = (function(){
  let _tmpConsole = console.warn;
  return function() {
    localStorage.setItem('Last Warn', stringMessage(arguments))
    return _tmpConsole.apply(this,arguments);
  }
})();

console.error = (function(){
  let _tmpConsole = console.error;
  return function() {
    localStorage.setItem('Last Error', stringMessage(arguments))
    return _tmpConsole.apply(this,arguments);
  }
})();

console.log("This is","LOG");
console.info("This is","INFO");
console.warn("This is","WARN");
console.error("This is","ERROR");
