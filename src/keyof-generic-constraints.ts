type Person = {
  name: string;
  age: number;
  gender: string;
  isMarried: boolean;
};

type NewType = keyof Person;

const a: NewType = 'age';

function getPropertyValue<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const response = getPropertyValue({ name: 'Arif', age: 10 }, 'age');
