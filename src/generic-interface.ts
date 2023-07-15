interface IEmployee<T, U = null> {
  name: string;
  wife: T;
  child?: U;
}

const employee1: IEmployee<string, string> = {
  name: 'Arif',
  wife: 'Binu',
  child: 'Ariba',
};

const employee2: IEmployee<boolean> = {
  name: 'Arif',
  wife: true,
};

interface IEmployeeWife {
  name: string;
  age: number;
}

const employee3: IEmployee<IEmployeeWife> = {
  name: 'Arif',
  wife: {
    name: 'Binu',
    age: 22,
  },
};
