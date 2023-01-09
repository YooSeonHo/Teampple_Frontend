import { atom } from 'recoil';

export const userState = atom<string>({
  key: 'user',
  default: '',
});
 