function stringMessage() {
  return Array.prototype.join.call(arguments[0]," ");
};
let cpLog = console.log;
let cpWarn = console.warn;
let cpError = console.error;

console.log = function(){
  localStorage.setItem('Last Log', stringMessage(arguments))
  cpLog.apply(this,arguments);
};

console.warn = function(){
  localStorage.setItem('Last Warn', stringMessage(arguments))
  cpWarn.apply(this,arguments);
};

console.error = function(){
  localStorage.setItem('Last Error', stringMessage(arguments))
  cpError.apply(this,arguments);
};

console.log("This is","LOG");
console.warn("This is","WARN");
console.error("This is","ERROR");
