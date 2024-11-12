// TodoItem.jsx - todo component

import React from 'react';

function TodoItem({ todo, onToggleComplete, onEdit, onDelete }) {
    // this component renders single todo item based on the todo object passed in.
    // todo object contains properties for the text, completed status, and whether it is being edited.
    // the 3 functions passed in - used to handle the events of toggling the completed status,
    //editing the text, and deleting the todo

    // component returns a single li element which contains the following elements:
    // - checkbox input element. checked property is set to the value of completed property
    //   of todo object. when checkbox is changed, onToggleComplete function is called
    // - a span element or a text input element. if todo is being edited, text input is shown
    //   and value of text input is set to text property of todo object. when text
    //   input is changed, onEdit function is called with new value
    // - two buttons. first button is used to edit todo item and second button is used
    //   to delete todo item. disabled property of each button is set to true if
    //   condition is met. the edit button is disabled if todo item is complete.
    //   delete button is disabled if todo item is not complete.

    return (
        <li className={`todo-item ${todo.completed ? 'completed': ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={ontoggleComplete}
            />
            {todo.isEditing ? (
                <input type="text" value={todo.text} onChange={(e) => onEdit(e.target.value)} />
            ) : (
                <span>{todo.text}</span>
            )}
            <button onClick={onEdit} disabled={todo.completed}>Edit</button>
            <button onClick={onDelete} disabled={!todo.completed}>Delete</button>
        </li>
    );
}

export default TodoItem;
