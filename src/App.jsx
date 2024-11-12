// main component- file is main structure of the todo list app. Todo list logic.

import React, { useState } from 'react'; // import useState hook from React - use for state management
import './App.css'; //import CSS
import { useImmerReducer } from 'use-immer';
// import useImmerReducer hook, custom hook for managing state with immer library -
// allows us to write code that looks like
// we're writing in-place modifications to the state, but in reality, the hook will always
// create a new, immutable version of the state when the state changes


