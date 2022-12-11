export const getRating = (num:number) => {
  if(Number.isInteger(num)){
    return num * 20;
  }
  return `${Number(num.toString()[0] + num.toString()[2]) * 2}%`;
};

