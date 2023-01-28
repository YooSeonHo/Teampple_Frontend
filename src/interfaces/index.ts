export interface IName {
  name: string;
}

export interface ITeamMate {
  name: string;
  major: string;
  schoolName: string;
  index?: number;
}

export interface FileInfo {
  fileName: string;
  route: string;
  size: number;
  updatedAt: string;
  uploader: string;
  url: string;
  fileId: number;
  taskId: number;
}

export interface StyledToDoInfo {
  pathname: string;
}

export interface StyledFeedInfo {
  pathname: string;
}

export interface StyledToDoBoxInfo {
  pathname: string;
}  

export interface SearchFileInfo {
  search: string;
}  

export interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}  

export interface IPlan {
  name: string;
  dueDate: string;
  dDay?: Date;
  now?: Date;
}  


export interface feedbacksInfo{
  adviser : string;
  comment : string;
  createdAt : string;
  adviserImage : string;
}

export interface filesInfo{
  filename : string
  url : string
  size: number;
  updatedAt: string;
}


export interface detailInfo{
  done : boolean;
  dueDate : string;  
  feedbacks? : feedbacksInfo[];
  files?: filesInfo[];
  operators : string[];
  sequenceNum : number;
  stageName : string;
  startDate : string;
  taskName : string;
}

export interface ModalProps{
  setModal : any;
  setNextModal : any;
}

export interface makeTeampleInfo{
  goal: string;
  name : string;
  stages : stageInfo[];
  dueDate : Date | string;
  startDate : Date | string;
}

export interface stageInfo{
  name: string
  sequenceNum: number;
  dueDate: Date | string;
  startDate: Date | string;
}

export interface userInfo{
  email : string;
  entranceYear : string;
  major : string;
  name : string;
  profileImage : string;
  schoolName : string;
  subscribePlan : string;
  }

export interface fbInfo {
  checked: boolean,
  modifiedAt: string,
  taskId: number,
  taskName: string,
  teamId: number,
  teamName: string
}

export interface fbListInfo {
  feedbacks : fbInfo[]
}

export interface profileImg {
  profileImg : string
}