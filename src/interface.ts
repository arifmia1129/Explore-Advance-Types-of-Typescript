type User = {
  name: string;
  age: number;
};

const userWithTypeAlias: User = {
  name: 'Arif',
  age: 23,
};

type ExtendUser = User & {
  role: string;
};

const userWithExtendedUserType: ExtendUser = {
  name: 'Arif',
  age: 23,
  role: 'admin',
};

interface IUser {
  name: string;
  age: number;
}

const userWithInterface: IUser = {
  name: 'Binu',
  age: 22,
};

interface IExtendedUser extends IUser {
  role: string;
}

const userWithExtendedUserInterface: IExtendedUser = {
  name: 'Arif',
  age: 23,
  role: 'user',
};

type AddNumbers = (num1: number, num2: number) => number;

const addNumbers: AddNumbers = (num1, num2) => num1 + num2;

interface IAddNumbers {
  (num1: number, num2: number): number;
}

const addNumbersWithInterface: IAddNumbers = (num1, num2) => num1 + num2;

type RollNumbers = number[];

interface IRollNumbers {
  [index: number]: number;
}

const rollNumbers: IRollNumbers = [1, 2, 3, 4];
