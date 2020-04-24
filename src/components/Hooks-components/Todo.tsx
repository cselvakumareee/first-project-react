import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = (props:any) => {
    const [todoName, setTodoName] = useState('');
    //const inputState = useState('');
    const [todoList, setTodoList]:any = useState([]);
    const [data, setData]:any = useState([]);
    //const todoList:any = [];
    //Note: the below code explanation of array destruction
    // todostate: {
     //   userInput: '',
     //   todoList: []
    //}
    //const [todoState, setTodoState]:any = useState({userInput:'', todoList: [], todos: []});
    // const fetchData = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').
    //     then((response:any)=>{
    //        const todoData = response.Data;
    //        const todos:any = [];
    //        for(let key in todoData){
    //           todos.push({id: key, name: todoData[key].name})
    //        }
    //     setData(todos);
    //        console.log('todos'+todos);
    //     });
    // }
    useEffect(()=> {
      
            axios.get('https://angular-demo-project-684c6.firebaseio.com/todo.json').
            then((response:any)=>{
                const todoRef= response.data;
                const tRef:any=[];
                for(let key in todoRef){
                    (tRef.concat({id: key, name: todoRef[key].name}));
                }
            setData(tRef);
            }).catch((error:any)=>{
                console.log(error);
            })
        
    },[]);

    const inputChangeHandler = (event:any) => {
         //inputState[1](event.target.vaue);
        // setTodoState({
        //     userInput: event.target.value,
        //     todoList: todoState.todoList
        // });
        setTodoName(event.target.value);
    };

    const todoAddHandler = () => {
        // setTodoState({
        //     userInput: todoState.userInput,
        //     todoList: todoState.todoList.concat(todoState.userInput)
        // });
        setTodoList(todoList.concat(todoName))
        axios.post('https://angular-demo-project-684c6.firebaseio.com/todo.json', {name: todoName}).
        then((response => {
           // console.log(response.data);
        })).catch(error => {
            console.log(error);
        }
        )
    };
 return (
     <React.Fragment> 
         <input type="text" placeholder="Todo" value={todoName} onChange={inputChangeHandler}/>
         <button type="button" onClick={todoAddHandler}>Add</button>
          <ul>
             {data.map((todo:any)=>{
                return <li key={todo.id}>{todo.name}</li>
             })}
         </ul>
     </React.Fragment>
 );
}

export default Todo;