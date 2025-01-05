import { MdDelete } from "react-icons/md";

const TodoItem = ({ todoItem, handleDeleteButton }) => {
  return (
    <>
      <div className="container text-start">
        <div className="row kgRow">
          <div className="col-6">{todoItem.todoName}</div>
          <div className="col-4">{todoItem.todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kgButton"
              onClick={() => handleDeleteButton(todoItem.todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
