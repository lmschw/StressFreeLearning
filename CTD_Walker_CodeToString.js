const readline = require('readline');
const fs = require('fs');
var speed = 100;
var sequence = [1,7,3,4];
var content = ``;

const readInterface = readline.createInterface({
  input: fs.createReadStream('ConnectTheNumbers\\Walker_ConnectTheNumbers.aesl'),
  output: false,
  console: false
});

var i = 0
readInterface.on('line', function(line) {
    if (i == 2){
        content = content.concat(`var sequence[] = [` + sequence + `]\n`);
      }
      else if (i == 3){
        content = content.concat(`var sequencelength = ` + sequence.length + `\n`);
      }
      else if (i == 5){
        content = content.concat(`var speed = ` + speed + `\n`);
      }
      else {
        content = content.concat(line+`\n`);
      }
      i++;
    
      if (i == 20){
        console.log(content);
      }
});

console.log(content);
