import { atom } from 'recoil';

export const userState = atom<string>({
  key: 'user',
  default: '',
});

export const teamidState = atom<number>({
  key: 'teamid',
  default: 1,
});

export const teamMateNumState = atom<number>({
  key: 'teamMateNum',
  default: 0,
})