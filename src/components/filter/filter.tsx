import { ChangeEvent } from 'react';
import { editFilterText, updateTasks } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FILTER_LIST } from '../../const/const';
import { store } from '../../store';
import { deleteTasksAction, fetchTasksAction } from '../../store/api-actions';
import { Task } from '../../types/types';
import './filter.css';

export default function FilterComponent(): JSX.Element {
  const { filterText, quantityTasks, tasks } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const deleteCompletedTasks = () => {
    dispatch(updateTasks(tasks.filter((task: Task) => task.completed === false)));

    tasks.forEach((task) => {
      if (task.completed === true) {
        store.dispatch(deleteTasksAction(task));
      }});

    store.dispatch(fetchTasksAction());
  };

  const filterChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(editFilterText(evt.target.value));
  };

  return (
    <div className='filter'>

      <p className='filter__left'>{quantityTasks} items left</p>

      <ul className='filter__list'>

        {FILTER_LIST.map((item) => (
          <li className='filter__item' key={item}>
            <input
              checked={filterText === item }
              className='filter__item-input'
              type='radio'
              name='filter'
              id={item}
              value={item}
              onChange={(evt) => {
                filterChangeHandler(evt);
              }}
            />
            <label
              className='filter__item-label'
              htmlFor={item}
            >{item}
            </label>
          </li>
        ))}

      </ul>
      <button
        onClick={deleteCompletedTasks}
        className='filter__button'
      >
        Clear completed
      </button>
    </div>
  );
}

