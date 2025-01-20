import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "./components/Heading";
import CounterDisplay from "./components/CounterDisplay";
import Controls from "./components/Controls";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

const App = () => {
  const privacy = useSelector((store) => store.privacy);

  return (
    <div className="px-4 py-5 my-5 text-center">
      <Container>
        <Heading />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <CounterDisplay />}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls">
            <Controls />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
