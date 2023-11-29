import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
  li: `flex justify-between dark:bg-slate-600 bg-slate-200 text-stone-800 dark:text-neutral-200 p-4 my-2 capitalize rounded-lg block`,
  liComplete: `flex justify-between text-stone-800 dark:text-neutral-200 dark:bg-slate-600 bg-slate-200 p-4 my-2 rounded-lg block capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? 'checked' : ''}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default TodoItem;
