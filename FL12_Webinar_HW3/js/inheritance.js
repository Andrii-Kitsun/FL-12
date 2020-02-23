class Employee {
  static _EMPLOYEES = [];

  constructor(employee) {
    this.id = employee.id;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.birthday = employee.birthday;
    this.salary = employee.salary;
    this.position = employee.position;
    this.departament = employee.departament;

    Employee._EMPLOYEES.push(this);
  }

  get age() {
    const yearSeconds = 1000 * 60 * 60 * 24 * 365;
    const diff = Date.now() - new Date(employee.birthday).getTime();

    return Math.trunc(diff / yearSeconds);
  }

  get fullName() {
    return `${employee.firstName} ${employee.lastName}`;
  }

  get EMPLOYEES() {
    return Employee._EMPLOYEES;
  }

  quit() {
    const index = Employee._EMPLOYEES.indexOf(this);
    if (index !== -1) {
      Employee._EMPLOYEES.splice(index, 1);
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
  constructor(employee) {
    super(employee);
    this.position = 'manager';
  }

  get managedEmployees() {
    const managed = [];

    Employee._EMPLOYEES.forEach(employee => {
      if (employee.departament === this.departament && employee.position !== 'manager') {
        managed.push(employee);
      }
    });

    return managed;
  }
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
  constructor(employee) {
    super(employee);
    this.departament = 'hr';
  }
}

class SalesManager extends Manager {
  constructor(employee) {
    super(employee);
    this.departament = 'sales';
  }
}

function ManagerPro(manager, benefits) {
  Object.assign(manager, benefits);
}
