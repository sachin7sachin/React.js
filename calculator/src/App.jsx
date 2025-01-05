import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

const App = () => {
  const [calVal, setCalVal] = useState("");

  const handleButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayvalue = calVal + buttonText;
      setCalVal(newDisplayvalue);
    }
  };

  return (
    <>
      <center>
        <div className={styles.mainContainer}>
          <Display displayValue={calVal} />
          <ButtonsContainer handleButtonClick={handleButtonClick} />
        </div>
      </center>
    </>
  );
};

export default App;
