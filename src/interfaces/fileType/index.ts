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

export interface SearchFileInfo {
  search: string;
}

export interface filesInfo {
  filename: string;
  url: string;
  size: number;
  updatedAt: string;
  fileId?: number;
}

export interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}