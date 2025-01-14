import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

const App = () => {
  return (
    <>
      <center className="container">
        <ClockHeading />
        <ClockSlogan />
        <CurrentTime />
      </center>
    </>
  );
};

export default App;
