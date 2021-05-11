// This class needs a name, birthdate and gender parameters
class Human {
  constructor(name, birthdate, gender) {
    this.name = name;
    this.birthdate = birthdate;
    this.gender = gender;
  }
  eat(food) {
    console.log(`${this.name} is eating ${food}.`);
  }
  sleep(hours) {
    console.log(`${this.name} is sleeping fo ${hours}`);
  }
}

// This class additionally needs a salary parameter
// Also, this class should have a bonus method that takes a decimal and returns the salary
// with the bonus.
class Employee extends Human {
  constructor(name, birthdate, gender, salary) {
    super(name, birthdate, gender); // call the super class constructor and pass in the name parameter
    this.salary = salary;
  }
  bonus(bonusDecimal) {
    const bonusIncrease = bonusDecimal + 1;
    return this.salary * bonusIncrease;
  }
}
module.exports = { Employee, Human };
