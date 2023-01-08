import { atom } from 'recoil';

export const nameState = atom<string>({
  key: 'name',
  default: '',
});

export const aimState = atom<string>({
  key: 'aim',
  default: '',
});

export const startDateState = atom<Date>({
  key: 'startDate',
  default: new window.Date(),
});

export const endDateState = atom<Date>({
  key: 'endDate',
  default: new window.Date(),
});

//단계 상태 ... 복잡각이다
export const stepState = atom<string[]>({
  key: 'step',
  default: [],
});

export const testState = atom<string>({
  key: 'test',
  default: '단계 테스트',
});
