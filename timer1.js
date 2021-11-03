// process.stdout.write('\x07');
// let arr = [4, 5 ,6]
// let timeDelay = 1000
let arr = process.argv.slice(2)



for (let i of arr) {
  if (arr.length === 0) {
    break;
  }
  else if (i < 0 && arr[i] !== Number){
    break;
  } 
  else {
    setTimeout(() => {
      process.stdout.write(i +'\x07'+ "\n");
    } , (i * 1000) ) 
  }
};

  
    
  
  
  
  
  // setTimeout(() => {
    //   process.stdout.write('\x07');
// }, 3000)
