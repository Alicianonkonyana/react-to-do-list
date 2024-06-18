import React, { useState } from "react";
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="What is the task today?"
          value={value}
        ></input>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};
