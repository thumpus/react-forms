import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = ({ createTodo }) => {
    const [task, setTask] = useState("");

    const handleChange = evt => {
        setTask(evt.target.value);
    }

    const gatherInput = evt => {
        evt.preventDefault();
        createTodo({ task, id: uuidv4() });
        setTask("");
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <label htmlFor="task">Task:</label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={task}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewTodoForm;