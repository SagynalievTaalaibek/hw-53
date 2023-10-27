import './App.css';
import AddTaskForm from './TaskComponents/AddTaskForm';
import Task from "./TaskComponents/Task";

function App() {
  return (
    <div className="App">
      <AddTaskForm/>
      <Task/>
    </div>
  );
}

export default App;
