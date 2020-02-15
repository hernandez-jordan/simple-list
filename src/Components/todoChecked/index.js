import React from "react";
import './index.css';

const TodoChecked = props => {
  return (
    <section className="task-list">
      <h2>Checked list</h2>
      <ul>
        {props.checked.length > 0
          ? props.checked.map((item, key) => (
              <div className="listItem" key={key+1}> 
                <li className="item">
                  {item.text} {item.id}
                </li>
                <button onClick={() => props.deleteHandler(item.id)}>
                  remove list
                </button>
              </div>
            ))
          : null}
      </ul>
    </section>
  );
};

export default TodoChecked;
