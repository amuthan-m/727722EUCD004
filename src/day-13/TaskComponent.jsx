import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, postTask, removeTask, putTask } from '../../../redux/src/Action';

const TaskComponent = () => {
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(postTask(newTask));
    setNewTask('');
  };

  const handleDelete = id => {
    dispatch(removeTask(id));
  };

  const handleUpdate = (id, title) => {
    dispatch(putTask(id, title));
  };

  return (
    <div>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} />
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleUpdate(task.id, newTask)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;
