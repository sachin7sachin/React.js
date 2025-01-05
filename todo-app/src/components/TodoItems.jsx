import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, handleDeleteButton }) => {
  return (
    <>
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.todoName}
            todoItem={item}
            handleDeleteButton={handleDeleteButton}
          />
        );
      })}
    </>
  );
};

export default TodoItems;
