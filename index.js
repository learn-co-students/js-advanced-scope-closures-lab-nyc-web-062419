function produceDrivingRange(range) {
    return function(begin, end) {
        let begin_spot = parseInt(begin)
        let end_spot = parseInt(end) 
        let distance_bw = Math.abs(begin_spot - end_spot)
        let difference = range - distance_bw
        if (difference > 0) {
            return `within range by ${difference}`
        }
        else {
        return `${Math.abs(difference)} blocks out of range`
        }
    }
}

function produceTipCalculator(check) {
    return function(tip) {
        return check * tip 
    }
}

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}