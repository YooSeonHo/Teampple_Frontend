// import { detailInfo } from 'interfaces';
import { makeTeampleInfo, stageInfo } from 'interfaces';
import { atom } from 'recoil';
import { v1 } from 'uuid';
// key duplicate 방지를 위한 라이브러리 설치
// npm i --save-dev @types/uuid

export const usernameState = atom<string>({
  key: `username/${v1()}`,
  default: '',
});

export const userschoolState = atom<string>({
  key: `userschool/${v1()}`,
  default: '',
});

export const usermajorState = atom<string>({
  key: `usermajor/${v1()}`,
  default: '',
});

export const teamidState = atom<number>({
  key: `teamid/${v1()}`,
  default: 1,
});

export const teamMateNumState = atom<number>({
  key: `teamMateNum/${v1()}`,
  default: 0,
});

export const feedbackState = atom<boolean>({
  key: `isOpen/${v1()}`,
  default: false,
});

export const searchFileState = atom<string>({
  key: `search/${v1()}`,
  default: '',
});

export const IsSearchState = atom<boolean>({
  key: `isSearch/${v1()}`,
  default: false,
});

export const searchTemplateState = atom<string>({
  key: `searchTemplate/${v1()}`,
  default: '',
});

export const IsSearchTemplateState = atom<boolean>({
  key: `isSearchTemplate/${v1()}`,
  default: false,
});

export const zIndexState = atom<number>({
  key: `zIndex/${v1()}`,
  default: 997,
});

export const AddTeamzIndexState = atom<number>({
  key: `zIndex/${v1()}`,
  default: 997,
});

export const AddToDozIndexState = atom<number>({
  key: `zIndex/${v1()}`,
  default: 997,
});

export const modal2State = atom<boolean>({
  key: `modal2/${v1()}`,
  default: false,
});

export const idTokenState = atom<string>({
  key: `idtoken/${v1()}`,
  default: '',
});

export const kakaoAccessTokenState = atom<string>({
  key: `kakaoaccesstoken/${v1()}`,
  default: '',
});

export const kakaoRefreshTokenState = atom<string>({
  key: `kakaorefreshtoken/${v1()}`,
  default: '',
});

export const jwtAccessTokenState = atom<string>({
  key: `jwtaccesstoken/${v1()}`,
  default: '',
});

export const jwtRefreshTokenState = atom<string>({
  key: `jwtrefreshtoken/${v1()}`,
  default: '',
});

export const makeTeampleState = atom<makeTeampleInfo>({
  key : 'makeTeample',
  default : {
    dueDate: new Date,
    goal: '',
    name: '',
    stages: [
      {
        name: '',
        sequenceNum: 1,
        dueDate: new Date,
        startDate: new Date,
      }
    ],
    startDate: new Date,
  }  
});

export const stageState = atom<stageInfo[]>({
  key : 'stage',
  default :
  [{
    dueDate: new Date,
    name: '',
    sequenceNum: 1,
    startDate: new Date,
  }]
})
export const sequenceNumState = atom<number>({
  key: `sequencenum/${v1()}`,
  default: 1,
});

export const stageIdState = atom<number>({
  key: `stagenum/${v1()}`,
  default: 1,
});

export const taskIdState = atom<number>({
  key : `taskId/${v1()}`,
  default: 1
})