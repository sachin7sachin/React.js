import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { PostListProvider } from "./store/post-list-store";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <PostListProvider>
        <div className="mainContainer">
          <Sidebar />
          <div className="subContainer">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
};

export default App;
