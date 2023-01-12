import { useState } from "react";
import InputForm from "./Components/InputForm";
import LogoName from "./Components/LogoName";
import TodoList from "./Components/TodoList";
import { Todo } from "./Utilities/modal";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-pink-200 to-pink-400">
        <LogoName />
        <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
