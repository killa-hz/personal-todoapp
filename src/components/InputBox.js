import React, { useState } from 'react';

const InputBox = (props) => {
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleClick(e) {
    props.onAdd(input);
    e.preventDefault();
    setInput('');
  }

  return (
    <div className="inputBox">
      <form>
        <input
          className="todoInput"
          type="text"
          placeholder="What do you need to do?"
          onInput={handleInput}
          value={input}
        />
        <button className="todoButton" onClick={handleClick}>
          Get it!
        </button>
      </form>
    </div>
  );
};

export default InputBox;
