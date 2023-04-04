import { stageInfo } from "interfaces/stageType";

export interface ITeamMate {
  name: string;
  major: string;
  schoolName: string;
  image: string;
  teammateId?: number;
  id?: number;
}

export interface ITeamMateAndMe {
  image: number;
  major: string;
  name: string;
  schoolName: string;
  teammateId: number;
  teammateInfoVos: ITeamMate[];
}

export interface makeTeampleInfo {
  goal: string;
  name: string;
  stages: stageInfo[];
  dueDate: Date | string;
  startDate: Date | string;
}

export interface modTeampleInfo {
  stages: stageInfo[];
}

export interface IPlan {
  name: string;
  dueDate: string;
  dDay?: Date;
  now?: Date;
}