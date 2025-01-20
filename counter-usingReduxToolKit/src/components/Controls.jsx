import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterSliceAction } from "../store/counterSlice";
import { privacySliceAction } from "../store/privacySlice";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterSliceAction.increment());
  };

  const handleDecrement = () => {
    dispatch(counterSliceAction.decrement());
  };

  const handleAdd = () => {
    dispatch(counterSliceAction.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterSliceAction.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleToggle = () => {
    dispatch(privacySliceAction.toggle());
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDecrement}
      >
        -1
      </button>
      <button type="text" className="btn btn-warning" onClick={handleToggle}>
        Privacy toggle
      </button>
      <div className="subControlsDiv">
        <input
          type="text"
          placeholder="Enter the number"
          className="input"
          ref={inputElement}
        ></input>
        <button type="button" className="btn btn-success" onClick={handleAdd}>
          Add
        </button>

        <button type="text" className="btn btn-danger" onClick={handleSubtract}>
          subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
