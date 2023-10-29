import React from 'react';

interface Props {
  task: string;
  removeTask: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({task, removeTask}) => {
  return (
    <div className="task-container">
      <p>{task}</p>
      <button className="delete-button btn" onClick={removeTask}>Delete</button>
    </div>
  );
};

export default Task;