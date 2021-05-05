export const ramdom = (max = 6, min = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + 1);
};
