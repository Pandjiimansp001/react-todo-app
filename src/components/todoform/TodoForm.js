import { useState } from "react";

const TodoForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddTask({ task: enteredTask });
  };

  return (
    <section className="my-10 bg-white shadow-md rounded-md p-10">
      <form onSubmit={submitHandler} className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            id="task"
            placeholder="Add Task"
            aria-label="Full name"
            value={enteredTask}
            onChange={(event) => setEnteredTask(event.target.value)}
          />
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
