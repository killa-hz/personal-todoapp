import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import TodoItem from './components/TodoItem';
import { TweenMax, Power3 } from 'gsap';

function App() {
  const [items, setItems] = useState([]);

  const inputItem = useRef();

  useEffect(() => {
    TweenMax.to(inputItem.current, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  });

  function addNewItem(item) {
    setItems((prevState) => {
      return [...prevState, item];
    });
  }

  function duplicateItem(content) {
    setItems((prevState) => {
      return [...prevState, content];
    });
  }

  function deleteItem(id) {
    setItems((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div ref={inputItem} className="wrapper">
        <InputBox onAdd={addNewItem} />
        <div className="todoList">
          {items.map((item, index) => (
            <TodoItem
              id={index}
              key={index}
              content={item}
              onDelete={deleteItem}
              again={duplicateItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
