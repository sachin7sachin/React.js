import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const { counterValue } = useSelector((store) => store.counter);

  return (
    <>
      <p className="lead mb-4 counterDisplay">
        Current Counter value : {counterValue}
      </p>
    </>
  );
};

export default CounterDisplay;
