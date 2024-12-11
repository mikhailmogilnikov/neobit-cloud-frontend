export const plural = (number: number, [one, few, many]: [string, string, string]) => {
  if (number % 10 === 1 && number % 100 !== 11) {
    return one;
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    return few;
  } else {
    return many;
  }
};
