const TodoList = (props) => {
  return (
    <section className="w-full px-12">
      <div className="flex-col pb-8">
        <div className="text-white text-3xl pb-4">Your task : </div>
        <div className="w-full border-2"></div>
      </div>
      <ul className="list-none">
        {props.onTask.map((tk) => (
          <li
            key={tk.id}
            onClick={props.onRemoveItem.bind(this, tk.id)}
            className="bg-white shadow-md rounded-md p-10 mb-8"
          >
            <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
              {tk.task}
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
