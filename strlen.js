const strlen = (string) => {
  if(string.length && string.length <=10) {
    return string.length 
   } 
   else{
    return ('Error: your string does not meet the requirement')}
   }

const strReverse = (string) => string.split('').reverse().join('')


module.exports = {strlen, strReverse}