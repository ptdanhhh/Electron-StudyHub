import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { AiOutlinePlus } from 'react-icons/ai';
import TodoItem from './TodoItem';
import { db } from 'fbconfig';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

const style = {
  bg: `h-screen w-screen p-4 bg-zinc-50 dark:bg-slate-800`,
  container: `bg-white dark:bg-slate-700 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `font-bold text-center text-gray-800 p-2 text-stone-800 dark:text-neutral-200`,
  form: `flex justify-between`,
  input: `border p-2 w-full rounded-lg block `,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100 rounded-lg block`,
  count: `text-center p-2`,
};

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="h-screen w-screen p-4 bg-zinc-50 dark:bg-slate-800">
        <div className={style.container}>
          <h3 className={style.heading}>Todo App</h3>
          <form onSubmit={createTodo} className={style.form}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={style.input}
              type="text"
              placeholder="Add task here..."
            />
            <button className={style.button}>
              <AiOutlinePlus size={30} />
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
          {todos.length < 1 ? null : (
            <p className={style.count}>{`You have ${todos.length} todos`}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todolist;
