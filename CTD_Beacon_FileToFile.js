const readline = require('readline');
const fs = require('fs');
var id = 2;
var content = ``;

const readInterface = readline.createInterface({
  input: fs.createReadStream('ConnectTheNumbers\\Beacon_ConnectTheNumbers.aesl'),
  output: false,
  console: false
});

var i = 0
readInterface.on('line', function(line) {
    if (i == 3){
        content = content.concat(`var id = ` + id + `\n`);
    }
    else {
        content = content.concat(line+`\n`);
    }
    i++;
    
    fs.writeFile('temp-files\\Beacon_ConnectTheNumbers_temp.aesl', content, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
});

console.log(content);
