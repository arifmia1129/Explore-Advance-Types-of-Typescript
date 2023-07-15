type GenericType<T> = Array<T>;

const rollNumberString: GenericType<string> = ['1', '2'];
const rollNumbersNumber: GenericType<number> = [1, 2];
const rollNumbersBoolean: GenericType<boolean> = [true, false];

type UserInfo = {
  name: string;
  age: number;
};

const users: GenericType<UserInfo> = [
  {
    name: 'Arif',
    age: 21,
  },
];

type GenericTuple<X, Y> = [X, Y];

type HusbandType = {
  name: string;
  salary: number;
};

const spouse: GenericTuple<HusbandType, string> = [
  { name: 'Arif', salary: 15000 },
  'Binu',
];
