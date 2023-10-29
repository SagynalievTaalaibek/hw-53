import React, {useState} from 'react';
import './App.css';
import AddTaskForm from './TaskComponents/AddTaskForm';
import Task from './TaskComponents/Task';


interface TaskProps {
  id: string;
  task: string;
}

const App = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {id: '1', task: 'Do task1'},
    {id: '2', task: 'Do task2'},
    {id: '3', task: 'Do task3'},
  ]);

  let currentTask: string = '';

  const addTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    currentTask = event.target.value;
  };


  const btnAddSecond = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currentTask) {
      setTasks((prevState) => [
        ...prevState,
        {id: (Math.random() * 10000).toString(), task: currentTask}
      ]);
    }
  };


  const removeTask = (id: string) => {
    setTasks((prevState) => prevState.filter(task => {
      return task.id !== id;
    }));
  };

  const taskList = tasks.map((todo) => (
    <Task
      key={todo.id}
      task={todo.task}
      removeTask={() => (removeTask(todo.id))}/>
  ));

  return (
    <div>
      <AddTaskForm
        onTaskChange={addTask}
        add={btnAddSecond}
      />
      <div>
        {taskList}
      </div>
    </div>
  );
};

export default App;