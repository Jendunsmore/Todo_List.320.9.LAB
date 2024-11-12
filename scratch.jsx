/*

Your todo list application must have:

1) A heading labeling it as a "todo list."

2) A list of "todo" items, which are strings listing activities to be accomplished
    (e.g. "find that missing sock"). Each "todo" item should have:

    2.1) A checkbox next to it which indicates whether it is "complete."

    2.2) A "delete" button next to it which removes it from the list.
        - The "delete" button should be disabled unless the todo is complete!

    2.3) An "edit" button that replaces the todo string with a text input used to edit the todo.
        - Hint: bind the value of this text input to a piece of state so that it is always accurate,
        even when first displayed!

        - When this text input is active, the "delete" and "edit" buttons should be hidden, and a "save"
        button should appear. The "save" button should save any changes made to the todo within the text input.

3) An input element that creates new todo items and adds them to the list.

4) New todos should be added to the top of the list visually; the oldest todos should be at the bottom.

*/
//-------------------------------------------------------------------------------------------------

// app.jsx
/*
// function todoReducer(draft, action) {
    switch (action.type) {
        case 'ADD_TODO':
            draft.unshift({
                id: Date.now(),
                text: action.payload,
                completed: false,
                isEditing: false
            });
draft: this is a proxy of the current state that immer provides allowing change to
draft directly instead of returning a new state each time.
action: object containing type (action type) and additional data (the payload) informing
reducer what / how to change

case = to action type that updates draft directly.
ADD_TODO: adds new todo at top of list.
unshift: method inserts todo object at start
TOGGLE_COMPLETE: toggles completed status of todo by accessing - draft[action.index] ?
DELETE_TODO: deletes todo by index through splice
EDIT_TODO: isEditing = true enabling edit mode
SAVE_TODO: updates text of todo. exits edit mode = isEditing to false

reducer function - todoReducer: handles action to add, toggle complete status, delete, and edit and save todos
state & event handling - useImmerReducer: manages the todos array
useState - newTodo: tracking input for new todos.
