import NewTaskDesk from "./NewTaskDesk/NewTaskDesk";
import ProcessedDesk from "./ProcessedDesk/ProcessedDesk";
import styles from "./Board.module.css";
import DoneDesk from "./DoneDesk/DoneDesk";
import DeleteDesk from "./DeleteDesk/DeleteDesk";
import MoreDetails from "../MoreDetails/MoreDetails";
import Confetti from "./Confetti/Confetti";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Board() {
  const [showAnimation, setShowAnimation] = useState(false);
  const doneData = useSelector((data) => data.doneTask);

  useEffect(() => {
    const hasDone = doneData.some((element) => element.doneCard === true);
    setShowAnimation(hasDone);
    setTimeout(() => {
      setShowAnimation(false);
    }, 4100);
  }, [doneData]);

  return (
    <div className={styles.boardContainer}>
      <NewTaskDesk />
      <ProcessedDesk />
      <DoneDesk />
      <DeleteDesk />
      <MoreDetails />
      {showAnimation ? <Confetti /> : null}
    </div>
  );
}

export default Board;
