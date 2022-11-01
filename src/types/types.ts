export type Task = {
  id: number;
  description: string;
  completed: boolean;
}

export type Tasks = Task[];

export type FilterOption = {
  All: string;
  Active: string;
  Completed: string;
};
