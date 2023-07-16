type PromiseReturn = {
  success: boolean;
  message: string;
};

const makePromise = (): Promise<PromiseReturn> => {
  return new Promise<PromiseReturn>((resolve, reject) => {
    const data: PromiseReturn = {
      success: false,
      message: "Data couldn't fetched!",
    };

    if (data.success) {
      resolve(data);
    } else {
      reject(data);
    }
  });
};

const getDataFromPromise = async (): Promise<PromiseReturn> => {
  const result = makePromise();

  return result;
};

const getTodoData = async (): Promise<object> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return await res.json();
};

const todo = async (): Promise<void> => {
  const data = await getTodoData();
  console.log(data);
};

todo();
