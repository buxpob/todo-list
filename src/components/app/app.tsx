import { useAppSelector } from '../../hooks';
import FilterComponent from '../filter/filter';
import LoadingComponent from '../loading/loading';
import NewTaskComponent from '../new-task/new-task';
import TaskListComponent from '../task-list/task-list';
import './app.css';

function App(): JSX.Element {
  const { isTasksLoaded } = useAppSelector((state) => state);

  return (
    <div className='main'>
      <div className='main__container'>
        <h1 className='main__title'>todos</h1>

        <NewTaskComponent />

        {isTasksLoaded
          ?
          <LoadingComponent />
          :
          <div className='main__info'>

            <FilterComponent />

            <div className='main__tasks'>

              <TaskListComponent />

            </div>
          </div>}
      </div>
    </div>
  );
}

export default App;
