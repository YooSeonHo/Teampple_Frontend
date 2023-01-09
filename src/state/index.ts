import { atom } from 'recoil';

export const userState = atom<string>({
  key: 'user',
  default: '',
});

export const teamidState = atom<number>({
  key: 'teamid',
  default: 1,
});