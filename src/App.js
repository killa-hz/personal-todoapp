import React, { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import TodoItem from './components/TodoItem';

function App() {
  const [items, setItems] = useState([]);

  function addNewItem(item) {
    setItems((prevState) => {
      return [...prevState, item];
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
      <div className="wrapper">
        <InputBox onAdd={addNewItem} />
        <div className="todoList">
          {items.map((item, index) => (
            <TodoItem
              id={index}
              key={index}
              content={item}
              onDelete={deleteItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
