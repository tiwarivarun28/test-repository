import "./App.css";
import Todo from "./JSON_COMPONENT/Todo";
// import Todo from "./Components/Todo";
import Todolist from "./Components/Todolist";
import Counter from "./Components/Counter";
import TodoInput from "./JSON_COMPONENT/TodoInput"

function App() {
  return (
    <div className="App">
      <TodoInput/>
     
      {/* <Counter /> */}
      {/* <Todo />
      <Todolist /> */}
    </div>
  );
}

export default App;
