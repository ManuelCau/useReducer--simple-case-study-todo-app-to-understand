import { useReducer, useState } from "react";

type Todo = {
  id: number;
  text: string;
};
type Action = | { type: "ADD_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: number };

const initialState: Todo[] = [];

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

function App() {
  const [text, setText] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  function handleAddTodo() {
    if (text.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  }

  function handleRemove(id: number) {
    dispatch({ type: "REMOVE_TODO", payload: id });
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add todos"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemove(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
