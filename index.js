function produceDrivingRange (num) {
    return function (start, end) {
        start = parseInt(start)
        end = parseInt(end)
        const distance = Math.abs(start-end)
        if (distance <= num) {
            return `within range by ${num - distance}`
        } else {
            return `${distance - num} blocks out of range`
        }
    }
}

function produceTipCalculator(num) {
    return function (fare) {
        return fare*num
    }
}


function createDriver (){
    let driverId = 0
    return class  {
        constructor(name) { 
            this.id = ++driverId;
            this.name =name;
        }
    }
}