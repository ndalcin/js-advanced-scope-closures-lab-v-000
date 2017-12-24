
function produceDrivingRange(range) {
  let rangeInt = parseInt(range)
  return function (start, end){
    let beginning = parseInt(start);
    let ending = parseInt(end);
    let distance = Math.abs(beginning - ending)
    if (distance > rangeInt){
      return `${Math.abs(distance - rangeInt)} blocks out of range`
    }
    else {
      return `within range by ${Math.abs(distance - rangeInt)}`
    }
  }
}

function produceTipCalculator(percentage){
  return function (tip) {
    return tip * percentage
  }
}

function createDriver(){
  let DriverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++DriverId;
    }
  }
}
