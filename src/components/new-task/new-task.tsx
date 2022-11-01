import { useState, ChangeEvent, FormEvent } from 'react';
import { store } from '../../store';
import { addTaskAction, fetchTasksAction } from '../../store/api-actions';
import './new-task.css';

export default function NewTaskComponent(): JSX.Element {
  const [text, setText] = useState('');

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  const textChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addTaksClickHandler = () => {
    if (text.length > 0) {
      store.dispatch(addTaskAction(text));
      setText('');
    }
    store.dispatch(fetchTasksAction());
  };

  return (
    <form
      className='new-task'
      onSubmit={submitHandler}
    >
      <input
        className='new-task__input'
        placeholder='What needs to be done?'
        type='text'
        value={text}
        onChange={textChangeHandler}
      />
      <button
        className='new-task__button'
        type='submit'
        onClick={addTaksClickHandler}
      >Add
      </button>
    </form>
  );
}
