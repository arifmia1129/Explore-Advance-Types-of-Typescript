let test: any;

test = 'Next Level Web Development';

console.log((test as string).length);

// type assertion with function

function convertKmToGram(param: string | number): number | string {
  if (typeof param === 'string') {
    const value = Number(param) * 1000;
    return `Your converted value in gram is ${value}`;
  } else if (typeof param === 'number') {
    const value = param * 1000;
    return `Your converted value in gram is ${value}`;
  } else {
    return 'Sorry your provided param type is wrong. Type must be number or string';
  }
}

const resultConvertedBeString = convertKmToGram('10000') as string;
const resultConvertedBeNumber = convertKmToGram(1000) as number;

type CustomError = {
  message: string;
};

try {
} catch (error) {
  (error as CustomError).message;
}
