import {Token} from './token';

const AVATAR_URL = 'wtw-avatar';

export const getAvatarURL = (): Token => {
  const token = localStorage.getItem(AVATAR_URL);
  return token ?? '';
};

export const saveAvatarURL = (token: Token): void => {
  localStorage.setItem(AVATAR_URL, token);
};

export const dropAvatarURL = (): void => {
  localStorage.removeItem(AVATAR_URL);
};
