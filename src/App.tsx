import React, { useState} from 'react';
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

  const [newTask, setNewTask] = useState<string>('');

  const addTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const btnAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (newTask) {
      setTasks((prevState) => [
        ...prevState,
        { id: (Math.random() * 10000).toString(), task: newTask },
      ]);
      setNewTask('');
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
        add={btnAdd}
      />
      <div>
        {taskList}
      </div>
    </div>
  );
};

export default App;