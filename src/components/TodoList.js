import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ listItems, onDelete }) => {
  return (
    <div className="todoList">
      <ul>
        {listItems.map((item, index) => {
          return (
            <TodoItem
              key={index}
              id={index}
              content={item}
              onDelete={(id) => {
                onDelete(id);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
