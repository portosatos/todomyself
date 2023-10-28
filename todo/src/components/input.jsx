import React, { useState } from 'react';
import { AiFillCheckCircle, AiTwotoneStar } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';

function Input() {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();

    if (todoName.trim() === '') {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      todoName: todoName,
      isCompleted: false,
      isFavorite: false,
    };

    setTodos([...todos, newTodo]);
    setTodoName('');
  };

  const isCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const isFavorite = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isFavorite: !todo.isFavorite };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <AiFillCheckCircle
              onClick={() => isCompleted(todo.id)}
              className={todo.isCompleted ? 'text-green-600 ' : 'text-gray-600 '}
            />
            <AiTwotoneStar
              onClick={() => isFavorite(todo.id)}
              className={todo.isFavorite ? 'text-yellow-600 ' : 'text-gray-600 '}
            />
            <BsFillTrash3Fill onClick={() => deleteTodo(todo.id)} className="text-red-600" />
            {todo.todoName}
          </li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input
          value={todoName}
          onChange={(event) => setTodoName(event.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default Input;
