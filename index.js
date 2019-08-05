function produceDrivingRange(range) {
  return function(arg1, arg2) {
    let start = parseInt(arg1);
    let end = parseInt(arg2);
    let distance = start > end ? start - end : end - start;
    if (distance > range) {
      return `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  };
}

let produceTipCalculator = function(percentage) {
  return function(bill) {
    return bill * percentage;
  };
};

const createDriver = function(name) {
  driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id++;
    }
  };
};
