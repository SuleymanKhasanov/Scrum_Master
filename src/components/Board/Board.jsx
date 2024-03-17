import NewTaskDesk from "./NewTaskDesk/NewTaskDesk";
import ProcessedDesk from "./ProcessedDesk/ProcessedDesk";
import styles from "./Board.module.css";
import DoneDesk from "./DoneDesk/DoneDesk";
import DeleteDesk from "./DeleteDesk/DeleteDesk";
import MoreDetails from "../MoreDetails/MoreDetails";
import Confetti from "./Confetti/Confetti";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Board({ isMobile, isDesktop }) {
  const [showAnimation, setShowAnimation] = useState(false);
  const doneData = useSelector((data) => data.doneTask);

  const MobileAction = useSelector((data) => {
    return data.actiosFromMobile;
  });

  useEffect(() => {
    const hasDone = doneData.some((element) => element.doneCard === true);
    setShowAnimation(hasDone);
    setTimeout(() => {
      setShowAnimation(false);
    }, 4100);
  }, [doneData]);

  const [mobileContent, setMobileContent] = useState(null);

  const [mobileDataContent, setMobileDataConten] = useState(0);

  useEffect(() => {
    setMobileDataConten(
      MobileAction[MobileAction.length - 1] !== undefined
        ? MobileAction[MobileAction.length - 1].TaskMobileBtn
        : 0
    );
  }, [MobileAction]);

  useEffect(() => {
    switch (mobileDataContent) {
      case 0:
        setMobileContent(<NewTaskDesk />);
        break;
      case 1:
        setMobileContent(<ProcessedDesk />);
        break;
      case 2:
        setMobileContent(<DoneDesk />);
        break;
      case 3:
        setMobileContent(<DeleteDesk />);
        break;
      default:
        setMobileContent(null);
    }
  }, [mobileDataContent]);

  return (
    <div className={styles.boardContainer}>
      {isMobile === true ? (
        mobileContent
      ) : (
        <>
          <NewTaskDesk />
          <ProcessedDesk />
          <DoneDesk />
          <DeleteDesk />
        </>
      )}
      <MoreDetails />
      {showAnimation ? <Confetti isMobile={isMobile} /> : null}
    </div>
  );
}

export default Board;
