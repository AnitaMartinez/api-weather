export const sumAndAverage = arr => {
  const result =
    arr.reduce((p, c) => {
      return p + c;
    }, 0) / arr.length;
  return result.toFixed(1);
};
