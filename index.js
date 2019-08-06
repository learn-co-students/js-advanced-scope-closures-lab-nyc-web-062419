function produceDrivingRange(blockRange){
  return function(stringOne, stringTwo){
    let begin = parseInt(stringOne);
    let end = parseInt(stringTwo);
    let distance = Math.abs(end - begin);
    let difference = blockRange - distance;

    if (difference > 0) {
      return `within range by ${difference}`
    } else{
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
   return percent * fare;
  }
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}