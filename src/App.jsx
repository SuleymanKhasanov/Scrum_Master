import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Tasker from "./components/Tasker/Tasker";
import Board from "./components/Board/Board";
import "./App.css";
import MobileControlPanel from "./components/ModileControlPanel/MobileControlPanel";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    }
    if (window.innerWidth > 800) {
      setIsDesktop(true);
    }
  }, [isDesktop]);

  return (
    <>
      <Header />
      <Board isMobile={isMobile} isDesktop={isDesktop} />
      <Tasker />
      {isMobile ? <MobileControlPanel /> : null}
    </>
  );
}

export default App;
