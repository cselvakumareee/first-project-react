import React from 'react';

const List = (props: any) => {
    console.log('list is rendering...');
  return (
    <ul>
      {props.todoList.map((todo: any) => {
        return (
          <li
            key={todo.id}
            onClick={() => {
              props.click(todo.id);
            }}
          >
            {todo.name}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
