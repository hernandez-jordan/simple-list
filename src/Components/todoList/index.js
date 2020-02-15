import React from "react";

const TodoList = props => {
  return (
    <section className="task-list">
      <h2>To do list</h2>
      <ul>
        {props.items.map((item, key) => (
          <div key={key}>
            <input type="checkbox" value={props.newItem} onClick={() => props.itemChecked(item.id, item.text)} />
            <input type={item.text} defaultValue={(item.text + '-' +item.id)} readOnly /> 
          </div>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
