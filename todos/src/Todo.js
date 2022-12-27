import React from "react";

const Todo = ({ task = "todo", id = "1", remove }) => {
    const handleDelete = () => remove(id);

    let todo = (
        <div>
            <li>{task}</li>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );

    return todo;
}

export default Todo;