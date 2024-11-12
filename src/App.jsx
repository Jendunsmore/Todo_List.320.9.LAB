// main component- file is main structure of the todo list app. Todo list logic.

import React, { useState } from 'react'; // import useState hook from React - use for state management
import './App.css'; //import CSS
import { useImmerReducer } from 'use-immer';
// import useImmerReducer hook, custom hook for managing state with immer library -
// allows us to write code that looks like
// we're writing in-place modifications to the state, but in reality, the hook will always
// create a new, immutable version of the state when the state changes


// Reducer function for the todo list items
function todoReducer(draft, action) {
    switch (action.type) {
        case 'ADD_TODO':
            draft.unshift({
                id: Date.now(),
                text: action.payload,
                completed: false,
                isEditing: false
            });
// reducer function takes in current draft of state and action object
// returns new, immutable version of state

// if action.type is add_todo then a new todo item is added to the beginning of the todo list.
// the new list should have the following:
// id: current time in milliseconds
// text: text of todo item. obtained from action.payload
// completed: false = item isn't completed
// isEditing: false = todo item isn't currently being edited
            break;
        case 'TOGGLE_COMPLETE': // toggle completed item status, at specified index
            draft[action.index].completed = !draft[action.index].completed;
            break;
        case 'DELETE_TODO': // delete todo item at specified index
            draft.splice(action.index, 1);
            break;
        case 'EDIT_TODO': // edit todo item at specified index. edit text input
            draft[action.index].isEditing = true;
            break;
        case 'SAVE_TODO': // save todo item at specified index
            draft[action.index].text = action.payload; // in action.payload
            draft[action.index].isEditing = false; // isEditing = false, edit text input is hidden
            break;
        default:
            break;
    }
}
