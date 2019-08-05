
function produceDrivingRange(blockRange) {
    return function(string1, string2) {
        const loc1 = parseInt(string1);
        const loc2 = parseInt(string2);
        const diff = Math.abs(loc1 - loc2);
        if (diff <= blockRange) {
            return `within range by ${blockRange-diff}`;
        } else {
            return `${diff-blockRange} blocks out of range`;
        }
        };
}

function produceTipCalculator(tipRate) {
    return (cost => cost * tipRate)
}

function createDriver () {
    let driverId =  0;
    return class {
        constructor(name) {
          this.name = name
          this.id = ++driverId;
        }
    }
}

