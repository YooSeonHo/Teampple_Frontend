import { feedbacksInfo } from "interfaces/feedbackType";
import { filesInfo } from "interfaces/fileType";

export interface tasksInfo {
  taskId: number;
  name: string;
  done: boolean;
}

export interface teamtasksInfo {
  stageId: number;
  stageName: string;
  startDate: string;
  dueDate: string;
  sequenceNum: number;
  totaltask: number;
  achievement: number;
  tasks: tasksInfo[];
}

export interface detailInfo {
  done: boolean;
  dueDate: string;
  feedbacks?: feedbacksInfo[];
  files?: filesInfo[];
  operators: operatorsInfo[];
  sequenceNum: number;
  stageName: string;
  startDate: string;
  taskName: string;
}

export interface operatorsInfo {
  name?: string;
  id?: number;
}

export interface StyledToDoInfo {
  pathname: string;
  isNow: boolean;
}

export interface StyledToDoBoxInfo {
  pathname: string;
}