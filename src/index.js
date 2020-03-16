module.exports = function check(str, bracketsConfig) {
  if(str.length%2 !== 0){
    return false;
  }
  let stack = [];
  let config = [].concat(...bracketsConfig);
  for(let el of str){
    if(el === "7" || el === "8" || el === "|"){
      if(stack[stack.length-1] === el){
        stack.pop();
      }
      else{
        stack.push(el);
      }
    }
    else{
      if(config.indexOf(el)%2 === 0){
        stack.push(el);
      }
      else{
        if(stack[stack.length-1] === config[config.indexOf(el)-1]){
          stack.pop();
        }
      }
    }
  }
  return stack.length === 0 ? true : false;
}
