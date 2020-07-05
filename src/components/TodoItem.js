import React from 'react';

const TodoItem = (props) => {
  function handleClick(id) {
    props.onDelete(id);
  }

  return (
    <div>
      <li className="todoItem">
        <p className="todoContent" onClick={handleClick}>
          {props.content}
        </p>
      </li>
    </div>
  );
};

export default TodoItem;
