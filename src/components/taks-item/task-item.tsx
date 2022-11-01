import { store } from '../../store';
import { fetchTasksAction, updateTaskAction } from '../../store/api-actions';
import { Task } from '../../types/types';
import './task-item.css';

type TaskItemComponentProps = {
  task: Task;
}

export default function TaskItemComponent({ task }: TaskItemComponentProps): JSX.Element {
  const { description, completed } = task;

  const updateTaskHandler = () => {
    store.dispatch(updateTaskAction(task));
    store.dispatch(fetchTasksAction());
  };

  return (
    <li className={`task ${completed ? 'task--completed' : ''}`}>
      <button
        className={`task-button ${completed ? 'task-button--checked' : ''}`}
        onClick={updateTaskHandler}
      >
      </button>
      { description }
    </li>
  );
}
