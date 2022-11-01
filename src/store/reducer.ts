import { getTasks, setTasksLoadedStatus, setError, editFilterText, editQuantityTasks, updateTasks } from './action';
import { Tasks } from './../types/types';
import { createReducer } from '@reduxjs/toolkit';

type InitialState = {
  tasks: Tasks;
  filterText: string;
  isTasksLoaded: boolean;
  isTasksOpen: boolean;
  error: string | null;
  quantityTasks: number;
}

const initialState: InitialState = {
  tasks: [],
  filterText: 'All',
  isTasksLoaded: true,
  isTasksOpen: false,
  error: null,
  quantityTasks: 0,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTasks, (state, action) => {
      state.tasks = action.payload;
    })
    .addCase(setTasksLoadedStatus, (state, action) => {
      state.isTasksLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(editFilterText, (state, action) => {
      state.filterText = action.payload;
    })
    .addCase(editQuantityTasks, (state, action) => {
      state.quantityTasks = action.payload;
    })
    .addCase(updateTasks, (state, action) => {
      state.tasks = action.payload;
    });
});
