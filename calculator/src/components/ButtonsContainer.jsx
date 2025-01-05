import styles from "../App.module.css";

const ButtonsContainer = ({ handleButtonClick }) => {
  let buttons = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <center>
      <div className={styles.buttonContainer}>
        {buttons.map((button) => {
          return (
            <button
              key={button}
              className={styles.button}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          );
        })}
      </div>
    </center>
  );
};

export default ButtonsContainer;
