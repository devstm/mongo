export interface IUser {
  id: number;
  username: string;
  phone: string;
  email: string;
  token: string | any;
}
export interface TaskParams {
  id: number;
  userId: number;
}
export interface ITask {
  id: number;
  title: string;
  description: string;
  status: boolean;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
