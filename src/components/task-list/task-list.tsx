import './task-list.css';
import TaskItemComponent from '../taks-item/task-item';
import { useAppSelector } from '../../hooks';
import { Task } from '../../types/types';
import { useEffect } from 'react';
import { store } from '../../store';
import { fetchTasksAction } from '../../store/api-actions';

export default function TaskListComponent(): JSX.Element {
  const { tasks, filterText } = useAppSelector((state) => state);

  useEffect(() => {
    store.dispatch(fetchTasksAction());
  }, [filterText]);

  return (
    <ul className='tasks'>
      {tasks.map((task: Task) => (
        <div key={task.id}>
          <TaskItemComponent task={task}/>
        </div>
      ))}
    </ul>
  );
}
