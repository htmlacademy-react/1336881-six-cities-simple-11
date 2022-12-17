import { toast } from 'react-toastify';

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

export function validatePassword(str:string) {
  const regNumber = new RegExp(/[0-9]/);
  const regLower = new RegExp(/[a-z]/);
  const regUpper = new RegExp(/[A-Z]/);

  const result = regNumber.test(str) && (regLower.test(str) || regUpper.test(str));

  if(!result) {
    toast.warn('invalid password, the password must have an uppercase, lowercase and a number');
  }

  return result;
}

