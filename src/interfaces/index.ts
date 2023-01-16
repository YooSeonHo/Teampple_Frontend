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
