function produceDrivingRange(blockrange){
  return function (startingblock, endingblock) {
    let start = parseInt(startingblock)
    let end = parseInt(endingblock)
    let distance = Math.abs(start - end)
    let difference = blockrange - distance
    if (difference < 0)
    {
      return `${Math.abs(difference)} blocks out of range`
    }
    else if (difference > 0)
    {
      return `within range by ${Math.abs(difference)}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(totalbill){
    return totalbill * percentage
  }
}

function createDriver(name){
  let DriverId = 0
  return class Driver {
    constructor(name, id) {
      this.id = DriverId
      this.name = `${name}`
      DriverId++
    }
  }
}