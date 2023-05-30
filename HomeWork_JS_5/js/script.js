// #1

const carInfo = {
  manufacturer: 'Dodge',
  model: 'Challenger',
  year: 1969,
  averageSpeed: 180,
  fuelTankCapacity: 70,
  averageFuelConsumption: 15,
  drivers: {
    Mike: true,
  },

  getInfo: function () {
    for (let key in carInfo) {
      console.log(key, carInfo[key]);
    }
  },

  addDriver: function (driverName) {
    this.drivers[driverName] = true;
  },

  checkDriver: function (driverName) {
    return this.drivers.hasOwnProperty(driverName);
  },

  calculateTrip: function (distance) {
    const totalDrivingTime = distance / this.averageSpeed + Math.floor(distance / (this.averageSpeed * 4));
    const fuelConsumption = (distance * this.averageFuelConsumption) / 100;

    return {
      drivingTime: totalDrivingTime,
      fuelConsumption: fuelConsumption
    };
  },

};

console.log(carInfo);
carInfo.getInfo();

carInfo.addDriver('John');
carInfo.addDriver('Milly');

console.log(carInfo.checkDriver('Mike'));
console.log(carInfo.checkDriver('John'));
console.log(carInfo.checkDriver('Edward'));

const tripInfo = carInfo.calculateTrip(400); 
console.log('Driving time:', tripInfo.drivingTime.toFixed(2) + ' hours');
console.log('Fuel consumption:', tripInfo.fuelConsumption.toFixed(2) + ' liters');

// #2

const describeTime = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  showTime: function () {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  },

  changeSeconds: function (seconds) {
    this.seconds += seconds;

    if (this.seconds >= 60) {
      const minutesToAdd = Math.floor(this.seconds / 60);
      this.seconds %= 60;
      this.changeMinutes(minutesToAdd);
    }
  },

  changeMinutes: function (minutes) {
    this.minutes += minutes;

    if (this.minutes >= 60) {
      const hoursToAdd = Math.floor(this.minutes / 60);
      this.minutes %= 60;
      this.changeHours(hoursToAdd);
    }
  },

  changeHours: function (hours) {
    this.hours += hours;
  },

}

console.log(describeTime);
describeTime.showTime();

describeTime.changeSeconds(30);
describeTime.showTime(); 

describeTime.changeMinutes(75);
describeTime.showTime(); 

describeTime.changeHours(3);
describeTime.showTime(); 

// #3

const fraction1 = {
  x: 2,
  y: 5,
};

const fraction2 = {
  x: 3,
  y: 7,
};

const mathFraction = {

  addFraction: function (obj1, obj2) {
    const numerator = obj1.x * obj2.y + obj2.x * obj1.y;
    const denominator = obj1.y * obj2.y;

    return {
      x: numerator,
      y: denominator,
    };

  },

  minusFraction: function (obj1, obj2) {
    const numerator = obj1.x * obj2.y - obj2.x * obj1.y;
    const denominator = obj1.y * obj2.y;

    return {
      x: numerator,
      y: denominator,
    };

  },

  multiplyFraction: function (obj1, obj2) {
    const numerator = obj1.x * obj2.x;
    const denominator = obj1.y * obj2.y;

    return {
      x: numerator,
      y: denominator,
    };

  },

  divideFraction: function (obj1, obj2) {
    const numerator = obj1.x * obj2.y;
    const denominator = obj1.y * obj2.x;

    return {
      x: numerator,
      y: denominator,
    };

  },

};

const resultAdd = mathFraction.addFraction(fraction1, fraction2);
console.log("Додавання:", resultAdd); 

const resultMinus = mathFraction.minusFraction(fraction1, fraction2);
console.log("Віднімання:", resultMinus); 

const resultMultiply = mathFraction.multiplyFraction(fraction1, fraction2);
console.log("Множення:", resultMultiply); 

const resultDivide = mathFraction.divideFraction(fraction1, fraction2);
console.log("Ділення:", resultDivide); 

// Скорочення об'єкта-дробу не зробила

