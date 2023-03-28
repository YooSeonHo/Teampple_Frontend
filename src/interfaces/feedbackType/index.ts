export interface StyledFeedInfo {
  pathname?: string;
  checked?: boolean;
}

export interface fbListInfo {
  feedbacks: fbInfo[];
}

export interface fbInfo {
  checked: boolean;
  modifiedAt: string;
  taskId: number;
  taskName: string;
  teamId: number;
  teamName: string;
}

export interface feedbacksInfo {
  adviser: string;
  comment: string;
  createdAt: string;
  adviserImage: string;
  feedbackId: string;
}