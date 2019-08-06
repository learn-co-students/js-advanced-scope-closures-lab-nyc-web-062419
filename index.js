function produceDrivingRange(num) {
    return function(startblk, endblk) {
        if ((endblk.substr(0, 2) - startblk.substr(0, 2)) < num) {
        return `within range by ${(startblk.substr(0, 2) - endblk.substr(0, 2)) + num}`
        } else {
            return `${(endblk.substr(0, 2) - startblk.substr(0, 2)) - num} blocks out of range`
        }
    }
}

function produceTipCalculator(prcnum) {
    let num1 = String(prcnum)
    let num2 = num1.concat("0")
    let num3 = num2.substr(2, 4)
    return function(num) {
        return num / num3
    }
}

function createDriver() {
    let ItemId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ItemId;
    }
  };
}
  