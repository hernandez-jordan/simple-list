import React, { useState } from "react";
import TodoList from "../todoList";
import TodoChecked from "../todoChecked";

const TodoForm = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    if (newItem === "") return;
    setItems([...items, { id: Date.now(), text: newItem, completed: false }]);
    e.target.reset();
  };

  const itemChecked = (id, text) => {
    //if there is an item in the list  && checkbox is clicked, delete checked item from todoList and add checked item to checked list
    console.log(id);
    setChecked([...checked, { id: id, text: text, completed: true }]);
    setItems(items.filter(item => item.id !== id));
    setNewItem("");
  };

  //filter out the id onClick
  const deleteHandler = id => {
    console.log(id);
    setChecked(checked.filter(item => item.id !== id));
  };

  return (
    <>
      <section className="task-form">
        <h3>New to-do</h3>
        <form onSubmit={submitHandler}>
          <input
            placeholder="Your task"
            type="text"
            onChange={e => {
              setNewItem(e.target.value);
            }}
            required
          />
          <button> Add to-do</button>
        </form>
        <TodoList
          items={items}
          itemChecked={itemChecked}
        />
      </section>
      <TodoChecked 
        checked={checked}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default TodoForm;
