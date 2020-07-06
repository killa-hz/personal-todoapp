import React from 'react';

const TodoItem = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }
  function again() {
    props.again(props.content);
  }

  return (
    <div>
      <li className="todoItem">
        <p className="todoContent" onClick={handleClick}>
          {props.content}
        </p>
        <div>
          <button className="duplicateButton" onClick={again}>
            again
          </button>
          <button className="doneButton" onClick={handleClick}>
            dunzo
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
