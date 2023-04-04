import {tasksInfo} from '../taskType'

export interface StyledProfileImgInfo {
  profileImage: string;
}

export interface userInfo {
  email: string;
  entranceYear: string;
  major: string;
  name: string;
  profileImage: string;
  schoolName: string;
  subscribePlan: string;
}

export interface userTaskInfo {
  achievement: number;
  name: string;
  teamId: number;
  totalStage: number;
  tasks: tasksInfo[];
}

export interface userTeamInfo {
  name: string;
  teamId: number;
}
