import React from "react";
export const TodoForm = () => {
  return (
    <div className="TodoForm">
      <form>
        <input type="text" placeholder="What is the task"></input>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};
