const genericFunction = <T>(param: T): T[] => {
  return [param];
};

const res1 = genericFunction<string>('Arif');
const res2 = genericFunction<boolean>(true);
const res3 = genericFunction<object>({
  name: 'arif',
  wife: 'binu',
  child: 'ariba',
});

const genericFunc = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const res4 = genericFunc<string, string>('Arif', 'Binu');

function addWifeInfoIntoHusbandInfo<T>(wifeInfo: T): object {
  const husbandInfo = {
    name: 'Arif',
    age: 23,
    profession: 'Software Developer',
  };

  return { ...husbandInfo, wifeInfo };
}

const result = addWifeInfoIntoHusbandInfo<string>('Binu');

console.log(result);
