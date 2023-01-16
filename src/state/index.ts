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

export const feedbackState = atom<boolean>({
  key : 'isOpen',
  default : false
})

export const searchFileState = atom<string>({
  key : 'search',
  default : ""
})

export const IsSearchState = atom<boolean>({
  key : 'isSearch',
  default : false
})

export const zIndexState = atom<number>({
  key : 'zIndex',
  default : 997
})

export const modal2State = atom<boolean>({
  key : 'modal2',
  default : false
})