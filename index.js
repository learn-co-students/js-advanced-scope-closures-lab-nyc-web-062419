function produceDrivingRange(distance){
    return function(start, end){
        let startpoint = parseInt(start);
        let endpoint = parseInt(end);
        let travelled = Math.abs(endpoint-startpoint)
        let limits = (distance - travelled) 
    
        if (limits < 0) {
            return `${Math.abs(limits)} blocks out of range`
        } else { 
            return `within range by ${limits}`
        }
    }
}

function produceTipCalculator(percent){
    return function(fare){
        return (fare * percent)
    }
}

function createDriver() {
    let driverId = 0
    return class {
      constructor(name) {
        this.id = ++driverId
        this.name = name
      }
    }
  }