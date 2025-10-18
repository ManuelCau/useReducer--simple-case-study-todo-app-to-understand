# To-Do App — Understanding the `useReducer` Hook

## 🧩 Overview

A simple single-page app built to study how the `useReducer` hook works in React + TypeScript.  
The app manages a list of todos through a reducer function and keeps the input controlled using `useState`.

---

## 🧠 What is `useReducer`?

`useReducer` is a React hook that allows you to **manage complex state logic** in a predictable way.  
It is similar to `useState`, but it separates **the state** from **the logic that updates it**, using a pure function called a _reducer_.

The reducer takes the current state and an action, and returns a **new state** without mutating the original one.

Declaration:

```ts
const [state, dispatch] = useReducer(reducer, initialState);
```

To update the state, you use the dispatch function, which sends an action to the reducer:

```ts
dispatch({ type: "ADD" });
dispatch({ type: "REMOVE" });
```

## ⚙️ Why useReducer?

Ideal for structured state and multiple action types.
Centralizes update logic inside a pure reducer function.
Makes state transitions more predictable and easier to test.

## 🧱 About the project

This project is a simple To-Do App that allows the user to write text in an input field, display it in a list, and remove items from that list.

useReducer is used to manage the data logic — adding and removing items from the list — while useState is used to manage the input value as local state.

## 🧩 Example reducer 

```ts
function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
```
This reducer defines clear and predictable state transitions based on action types.

-

*By Manuel Cau — created as part of a personal learning exercise on React Hooks.*