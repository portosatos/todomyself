// import React from 'react';
// import { AiOutlineCheckCircle, AiOutlineStar } from 'react-icons/ai';
// import { BsFillTrash3Fill } from 'react-icons/bs';

// function Buttons({ todo, todos, setTodos }) {
//   const complitedTodo = () => {
//     const updatedTodos = todos.map((t) => {
//       if (todo.id === t.id) {
//         return {
//           ...t,
//           isCompleted: !t.isCompleted,
//         };
//       }
//       return t;
//     });
//     setTodos(updatedTodos);
//   };

//   const favoriteTodo = () => {
//     const updatedTodos = todos.map((t) => {
//       if (todo.id === t.id) {
//         return {
//           ...t,
//           isFavorite: !t.isFavorite,
//         };
//       }
//       return t;
//     });
//     setTodos(updatedTodos);
//   };

//   const trashTodo = () => {
//     const updatedTodos = todos.filter((t) => todo.id !== t.id);
//     setTodos(updatedTodos);
//   };

//   console.log(todos);
//   return (
//     <div>
//       <AiOutlineCheckCircle onClick={complitedTodo} />
//       <AiOutlineStar onClick={favoriteTodo} />
//       <BsFillTrash3Fill onClick={trashTodo} />
//     </div>
//   );
// }

// export default Buttons;
