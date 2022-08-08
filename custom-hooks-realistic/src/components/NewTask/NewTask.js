import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  //de-structure the object
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  // applyData(data): APPENDED to params, because of .bind()
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // "firebase name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: 'https://react-http-academind-udemy-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: { text: taskText }, // transforms to JSON in custom-hook
      },
      createTask.bind(null, taskText) // .bind() preconfigures function
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;