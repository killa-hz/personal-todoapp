import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';

function App() {
  const [items, setItems] = useState([]);

  function addNewItem(item) {
    setItems((prevState) => {
      return [...prevState, item];
    });
  }

  function deleteItem(item) {
    setItems((prevState) => {
      return prevState.filter((items, index) => {
        return index !== item;
      });
    });
  }

  return (
    <div className="container">
      <Header />
      <InputBox onAdd={addNewItem} />
      <TodoList
        todoItem="item number one"
        listItems={items}
        onDelete={deleteItem}
      />
    </div>
  );
}

export default App;
