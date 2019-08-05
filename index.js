function produceDrivingRange(range) {
  return function(start, end) {
    let traveled = parseInt(end) - parseInt(start);
    if (traveled > range) {
      return `${traveled - range} blocks out of range`;
    } else if (traveled <= range) {
      return `within range by ${range - traveled}`;
    }
  };
}

const produceTipCalculator = percent => fare => percent * fare;

function createDriver() {
  let ids = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ids;
    }
  };
}
