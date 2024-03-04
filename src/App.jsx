import Header from "./components/Header/Header";
import "./App.css";
import Tasker from "./components/Tasker/Tasker";
import Board from "./components/Board/Board";

function App() {
  return (
    <>
      <Header />
      <Board />
      <Tasker />
    </>
  );
}

export default App;
