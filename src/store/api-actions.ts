import { getFilter } from '../util';
import { Tasks, Task } from './../types/types';
import { TIMEOUT_SHOW_ERROR, BACKEND_URL } from './../const/const';
import { setError, getTasks, setTasksLoadedStatus, editQuantityTasks } from './action';
import { store } from '../store/index';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchTasksAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchTasks',
  async (_arg, { dispatch, extra: api, getState }) => {
    const { filterText } = getState();
    const { data } = await api.get<Tasks>(`${BACKEND_URL}${getFilter(filterText)}`);

    dispatch(setTasksLoadedStatus(true));
    dispatch(getTasks(data));
    dispatch(setTasksLoadedStatus(false));
    dispatch(editQuantityTasks(data.length));
  }
);

export const updateTaskAction = createAsyncThunk<void, Task, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'updateTask',
  async (task, { dispatch, extra: api, getState }) => {
    await api.put<Task>(`${BACKEND_URL}/${task.id}`, { ...task, completed: !task.completed });
  }
);

export const addTaskAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'addTask',
  async (text, { dispatch, extra: api, getState }) => {
    const task = {
      id: Math.floor(Math.random() * 1000) + 1,
      description: text,
      completed: false,
    };

    await api.post<Task>(BACKEND_URL, task);
  },
);

export const deleteTasksAction = createAsyncThunk<void, Task, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'deleteTasks',
  async (task, { dispatch, extra: api, getState }) => {
    await api.delete<Tasks>(`${BACKEND_URL}/${task.id}`);
  }
);
