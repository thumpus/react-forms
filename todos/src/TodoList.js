import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm"

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const create = newTodo => {
        setTodos(todos => [...todos, newTodo])
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const components = todos.map(todo => (
        <Todo
            remove={remove}
            key={todo.id}
            id={todo.id}
            task={todo.task}
        />
    ));;

    return (
        <div>
            <NewTodoForm createTodo={create} />
            <ul>{components}</ul>
        </div>
    );
}

export default ToDoList;