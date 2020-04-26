import React, { useState, useEffect, useReducer, useRef, useMemo } from 'react';
import axios from 'axios';
import List from '../Hooks-components/List';
import { useFormInput } from '../CustomHooks/Forms';

const Todo = (props: any) => {
  //const [todoName, setTodoName] = useState('');
  const [data, setData]: any = useState([]);
  const [submittedTodo, setSubmittedTodo] = useState(null);
  const todoInputRef:any = useRef();
  const [inputIsValid, setInputIsValid]:any = useState(true);
  const todoInput = useFormInput();

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
      //const todoName = todoInputRef.current.value;
      const todoName = todoInput.value;
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

  const inputValidationHandler = (event:any) => {
      if(event.target.value.trim() === ''){
        setInputIsValid(false);
      }
      else{
        setInputIsValid(true);
      }
  }
  return (
    <React.Fragment>
      {/* <input type="text" placeholder="Todo" ref={todoInputRef} onChange={inputValidationHandler}
      style={{backgroundColor: inputIsValid ? 'transparent' : 'red'}}/> */}
      <input type="text" placeholder="Todo" value={todoInput.value} onChange={todoInput.onChange}
      style={{backgroundColor: todoInput.validity === true ? 'transparent' : 'red'}}/>
      <button type="button" onClick={todoAddHandler}>
        Add 
      </button>
     {useMemo(()=>(<List todoList={todoList} click={todoRemoveHandler}/>),[todoList])}
    </React.Fragment>
  );
};

export default Todo;
