import React, { useState, useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

const Todo = (props: any) => {
  //const [todoName, setTodoName] = useState('');
  const [data, setData]: any = useState([]);
  const [submittedTodo, setSubmittedTodo] = useState(null);
  const todoInputRef:any = useRef();

  useEffect(() => {
    axios
      .get('https://angular-demo-project-684c6.firebaseio.com/todo.json')
      .then((response: any) => {
        const todoData = response.data;
        const todos = [];
        for (let key in todoData) {
          todos.push({ id: key, name: todoData[key].name });
        }
        dispatch({ type: 'SET', payLoad: todos });
      })
      .catch((error: any) => {
        console.log(error);
      });
    return () => {
      console.log('cleanup');
    };
  }, []);

//   useEffect(() => {
//     if (submittedTodo) {
//       dispatch({ type: 'ADD', payload: submittedTodo });
//     }
//   }, [submittedTodo]);

  const mouseMoveHandler = (event: any) => {
    //console.log(event.clientX, event.clientY);
  };

  const todoListReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payLoad);
      case 'SET':
        return action.payLoad;
      case 'REMOVE':
        return state.filter((todo: any) => {
          return todo.id !== action.payLoad;
        });
      default:
        return state;
    }
  };

  const [todoList, dispatch]: any = useReducer(todoListReducer, []);

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler); //return function help to cleanup while compUnmount
    };
  }, []); //empty array help to cleanup while compDidmount & if you are not using it will leads to infinite loop

//   const inputChangeHandler = (event: any) => {
//     setTodoName(event.target.value);
//   };

  const todoAddHandler = () => {
      const todoName = todoInputRef.current.value;
    axios
      .post('https://angular-demo-project-684c6.firebaseio.com/todo.json', { name: todoName })
      .then((response) => {
        // console.log(response.data);
        setTimeout(() => {
          const todoItem = { id: response.data.name, name: todoName };
          dispatch({ type: 'ADD', payload: todoItem });
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const todoRemoveHandler = (todoId: any) => {
    axios
      .delete(`https://angular-demo-project-684c6.firebaseio.com/todo/${todoId}.json`)
      .then((res) => {
        dispatch({ type: 'REMOVE', payload: todoId });
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <input type="text" placeholder="Todo" ref={todoInputRef} />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoList.map((todo: any) => {
          return (
            <li
              key={todo.id}
              onClick={() => {
                todoRemoveHandler(todo.id);
              }}
            >
              {todo.name}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
