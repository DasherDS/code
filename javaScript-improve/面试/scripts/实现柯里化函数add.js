// add(1,2,3).valueOf() //6
// add(1,2)(3)(4,5).valueOf() //15

function add(...args) {
  let params = args;

  const addFn = (...args2) => {
    params = params.concat(...args2);
    return addFn;
  };

  addFn.valueOf = () => {
    return params.reduce((total, item) => {
      return total + item;
    }, 0);
  };

  return addFn;
}

const res = add(1, 2, 3)(4).valueOf();
console.log(res);
