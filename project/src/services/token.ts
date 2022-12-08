
export const getToken = () => {
  const token = localStorage.getItem('token');
  return token || '';
};


export const saveToken = (token:string) => {
  localStorage.setItem('token', token);
};


export const dropToken = () => {
  localStorage.removeItem('token');
};
