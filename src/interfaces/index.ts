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
  fileName : string
  route : string 
  size : number
  updatedAt : string
  uploader : string
  url : string
}

export interface StyledToDoInfo {
  pathname : string
}
