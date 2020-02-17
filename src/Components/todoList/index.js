import React from "react";

const TodoList = props => {
  return (
    <section className="task-list">
      <h2>To do list</h2>
      <ul>
        {props.items.map((item, key) => (
          <div key={key}>
            <input 
              type="checkbox" 
              checked={false}
              onClick={() => props.itemChecked(item.id, item.text)} 
            />
            <input type={'text'} value={(item.text + '-' + item.id)} readOnly /> 
          </div>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
