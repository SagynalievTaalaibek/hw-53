import '../App.css';
import React from 'react';

interface Props {
  onTaskChange: React.ChangeEventHandler<HTMLInputElement>;
  add: React.MouseEventHandler<HTMLButtonElement>;
}

const AddTaskForm: React.FC<Props> = ({onTaskChange, add}) => {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Add new task" onChange={onTaskChange}/>
        <button className='btn' onClick={add}>Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;