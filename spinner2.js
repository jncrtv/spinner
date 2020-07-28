//SPINNING ANIMATION

let timeDelay = 100;
const spinnerChars = ['|', '/', '-', '\\']

//Loop through animation characters TWICE and increase delayTime of execution
for (let j = 0; j < 2; j++){
  for (let i of spinnerChars){  
    setTimeout(() => {
      process.stdout.write(`\r ${i}    `);
    }, timeDelay);

    timeDelay += 200;
  };
}
