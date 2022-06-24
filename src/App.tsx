import "react-toastify/dist/ReactToastify.css";
import "./app/styles/App.scss";
import MainRouter from "./MainRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <>
        <ToastContainer />
        <MainRouter />
      </>
    </div>
  );
}

export default App;
