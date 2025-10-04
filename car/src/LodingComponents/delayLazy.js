export const delayLazy = (importFunc, delay = 200) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunc()), delay);
  });
};
