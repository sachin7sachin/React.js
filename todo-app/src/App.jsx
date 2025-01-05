import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let [todoItems, setTodoItems] = useState([
    // {
    //   todoName: "buy milk",
    //   todoDate: "2/1/25",
    // },
    // {
    //   todoName: "go to college",
    //   todoDate: "2/1/25",
    // },
  ]);

  const handleAddNewItem = (newTodoName, newTodoDate) => {
    console.log(`the new item is ${newTodoName} ${newTodoDate}`);
    const newTodoItems = [
      ...todoItems,
      { todoName: newTodoName, todoDate: newTodoDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteButton = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.todoName !== todoName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todoContainer">
        <AppName />
        <AddTodo handleAddNewItem={handleAddNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems
          todoItems={todoItems}
          handleDeleteButton={handleDeleteButton}
        />
      </center>
    </>
  );
}

export default App;
