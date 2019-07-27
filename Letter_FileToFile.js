const readline = require('readline');
const fs = require('fs');
var speed = 100;
var stopMovementAfter = 10;
var changerate = 1;
var hints = 0;
var sound = 0;
var duration = 100;
var content = ``;

const readInterface = readline.createInterface({
  input: fs.createReadStream('A_alloptions.aesl'),
  output: false,
  console: false
});

var i = 0
readInterface.on('line', function(line) {
  if (i == 4){
    content = content.concat(`\nvar speed = ` + speed + `\n`);

  }
  else if (i == 5){
    content = content.concat(`var stopMovementAfter = ` + stopMovementAfter + `\n`);
  }
  else if (i == 6){
    content = content.concat(`var changerate = ` + changerate + `\n`);
  }
  else if (i == 8){
    content = content.concat(`var hints_ENABLED = ` + hints + `\n`);
  }
  else if (i == 9){
    content =  content.concat(`var sound = `+ sound + `\n`);
  }
  else if (i == 10){
    content = content.concat(`var hints_duration = ` + duration + `\n`);
  }
  else if (i != 7){
    content = content.concat(line);
  }
  i++;

  fs.writeFile('temp-files\\A_alloptions_temp.aesl', content, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 
});

console.log(content);
