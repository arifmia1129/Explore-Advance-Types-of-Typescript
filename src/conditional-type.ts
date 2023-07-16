type a1 = null;
type a2 = number;
type a3 = string;
type a4 = boolean;

// nested conditional type
type d = a1 extends number
  ? number
  : a2 extends string
  ? string
  : a3 extends boolean
  ? boolean
  : a4 extends string
  ? string
  : null;

type NewEmployee = {
  name: string;
  salary: number;
};

type CheckEmployee<T, K> = K extends keyof T ? true : false;

type CheckProperty = CheckEmployee<NewEmployee, 'wife'>;

type EmployeePosition =
  | 'sales & marketing'
  | 'hr & admin'
  | 'developer'
  | 'call center';

type RemoveEmployeePosition<T, K> = T extends K ? never : T;

type CurrentPosition = RemoveEmployeePosition<EmployeePosition, 'call center'>;
