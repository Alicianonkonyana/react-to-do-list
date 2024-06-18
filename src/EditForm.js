import React, { useState } from "react";
export const editForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <div className="editForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="update task"
          value={value}
        ></input>
        <button type="submit">update task</button>
      </form>
    </div>
  );
};
