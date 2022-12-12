export const getRating = (num:number) => {
  if(Number.isInteger(num)){
    return num * 20;
  }
  return `${Number(num.toString()[0] + num.toString()[2]) * 2}%`;
};

export function getRandomPositiveInteger (a:number, b:number) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


