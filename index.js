const produceDrivingRange = function(blockrange){
    return function(a,b){
        let start = parseInt(a);
        let end = parseInt(b);
        let range = Math.abs(end-start);
        let distance = blockrange - range;
        if (distance > 0)     
            return `within range by ${distance}`;
        else
            return `${Math.abs(distance)} blocks out of range`;
}
}

const produceTipCalculator = function(percentage){
    return function(fare){
        return fare * percentage;
    }
}



const createDriver = function(driver){
    let driverId = 0;
    return class{
        constructor (name){
            this.id = ++driverId
            this.name = name
        }
    }
}