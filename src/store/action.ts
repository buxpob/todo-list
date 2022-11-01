import { Tasks } from './../types/types';
import { createAction } from '@reduxjs/toolkit';

export const getTasks = createAction<Tasks>('getUsers');

export const editFilterText = createAction<string>('editFilterText');

export const editQuantityTasks = createAction<number>('editQuantityTasks');

export const setError = createAction<string | null>('setError');

export const updateTasks = createAction<Tasks>('updateContacts');

export const setTasksLoadedStatus = createAction<boolean>('setDataLoadedStatus');
