class Employee {
  static _EPLOYEES = [];

  constructor(employee) {
    this.id = employee.id;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.birthday = employee.birthday;
    this.salary = employee.salary;
    this.position = employee.position;
    this.departament = employee.departament;

    Employee._EPLOYEES.push(this);
  }

  get age() {
    const yearSeconds = 1000 * 60 * 60 * 24 * 365;
    const diff = Date.now() - new Date(employee.birthday).getTime();

    return Math.trunc(diff / yearSeconds);
  }

  get fullName() {
    return `${employee.firstName} ${employee.lastName}`;
  }

  get EPLOYEES() {
    return Employee._EPLOYEES;
  }

  quit() {
    const index = Employee._EPLOYEES.indexOf(this);
    if (index !== -1) {
      Employee._EPLOYEES.splice(index, 1);
    }
  }

  retire() {
    console.log('It was such a pleasure to work with you!');
    this.quit();
  }

  getFired() {
    console.log('Not a big deal!');
    this.quit();
  }

  changeDepartment(newDepartment) {
    this.departament = newDepartment;
  }

  changePosition(newPosition) {
    this.position = newPosition;
  }

  changeSalary(newSalary) {
    this.salary = newSalary;
  }

  getPromoted(benefits) {
    if (benefits.salary) {
      this.changeSalary(benefits.salary);
    }

    if (benefits.position) {
      this.changePosition(benefits.position);
    }

    if (benefits.departament) {
      this.changeDepartment(benefits.departament);
    }

    console.log('Yoohooo!');
  }

  getDemoted(punishment) {
    if (punishment.salary) {
      this.changeSalary(punishment.salary);
    }

    if (punishment.position) {
      this.changePosition(punishment.position);
    }

    if (punishment.departament) {
      this.changeDepartment(punishment.departament);
    }

    console.log('Damn!');
  }
}

class Manager extends Employee {

}

class BlueCollarWorker extends Employee {

}

class HRManager extends Manager {

}

class SalesManager extends Manager {

}

//Tests
const employee = new Employee({
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  birthday: '11/19/1999',
  salary: '500$',
  position: 'Employee',
  departament: 'Epam'
});

console.log('employee: ', employee);