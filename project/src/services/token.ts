const AUTH_TOKEN__KEY = 'wtw-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN__KEY);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN__KEY, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN__KEY);
};
