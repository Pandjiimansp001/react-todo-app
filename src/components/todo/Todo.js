import { useState } from "react";
import TodoForm from "../todoform/TodoForm";
import TodoList from "../todolist/TodoList";

const Todo = () => {
  const [userTask, setUserTask] = useState([]);

  const addUserTask = (userTask) => {
    setUserTask((prevTask) => [
      ...prevTask,
      { id: Math.random().toString(), ...userTask },
    ]);
  };

  const removeUserTask = (taskId) => {
    setUserTask((prevTask) =>
      prevTask.filter((userTask) => userTask.id !== taskId)
    );
  };

  return (
    <div className="flex flex-col  justify-center items-center">
      <h1 className="text-5xl mt-5 text-white font-bold">Todo Apps</h1>
      <TodoForm onAddTask={addUserTask} />
      <TodoList onTask={userTask} onRemoveItem={removeUserTask} />
    </div>
  );
};

export default Todo;
