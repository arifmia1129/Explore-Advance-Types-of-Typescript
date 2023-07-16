type Employee = {
  name: string;
  age: number;
  department: 'sales' | 'hr & admin' | 'development';
  salary: number;
};

const addEmployeeInfo = <T extends Employee>(info: T): T => {
  const companyInfo = {
    name: 'Seba Automation',
    address: 'Dhaka, Bangladesh',
    mobile: '01823036288',
    email: 'sebaautomation@gmail.com',
  };

  return { ...companyInfo, ...info };
};

const employeeInfo1 = addEmployeeInfo<Employee>({
  name: 'Arif',
  age: 22,
  department: 'development',
  salary: 20000,
});
