type Volume = {
  height: number;
  width: number;
  depth: number;
};

type Area<T> = {
  readonly [key in keyof T]: T[key];
};

const area: Area<{ height: number; width: number }> = {
  height: 10,
  width: 10,
};
