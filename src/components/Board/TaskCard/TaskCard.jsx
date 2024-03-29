import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { moreDetails } from "../../../redux/sliceMoreDetails";
import { processed } from "../../../redux/sliceProcessed";
import { reject } from "../../../redux/sliceReject";
import { done } from "./../../../redux/sliceDone";
import { useSelector } from "react-redux";
import styles from "./TaskCard.module.css";

function TaskCard({
  id,
  taskText,
  taskName,
  taskImportant,
  processedCard1 = false,
  doneCard = false,
}) {
  const firstLetterUpperOnName = taskName[0].toUpperCase();
  const deleteFirstLetterOnName = taskName.slice(1);
  const newTitleName = firstLetterUpperOnName + deleteFirstLetterOnName;

  const firstLetterUpperOnText = taskText[0].toUpperCase();
  const deleteFirstLetterOnText = taskText.slice(1);
  const newText = firstLetterUpperOnText + deleteFirstLetterOnText;

  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  const parts = taskImportant.split(":");
  const hoursImportant = parseInt(parts[0]) * 60;
  const minutesImportant = parseInt(parts[1]);
  const timeImportant = hoursImportant + minutesImportant;

  const currentHour = parseInt(hour) * 60;
  const currentMinutes = parseInt(minutes);

  const currentTime = currentHour + currentMinutes;

  const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTime(timeImportant - currentTime);
    }, 2000);
    setTime(timeImportant - currentTime + 1);
  });

  const [useMoreDetails, setUseMoreDetails] = useState(false);

  const [rejectBtn, setRejectBtn] = useState(false);

  const dispatch = useDispatch();

  if (useMoreDetails === true) {
    dispatch(moreDetails({ id, taskText, taskName, taskImportant, show: true }));
    setUseMoreDetails(false);
  }

  const rejectData = useSelector((data) => {
    return data.rejectTask || [];
  });

  const [disable, setDisable] = useState(false);

  const disableBtn = rejectData.some((item) => item.reject === true && item.id === id);

  useEffect(() => {
    setDisable(disableBtn);
  }, [rejectData]);

  if (rejectBtn === true) {
    dispatch(reject({ id, taskText, taskName, taskImportant, reject: true }));
    setRejectBtn(false);
  }

  const [processedCard, setProcessedCard] = useState(false);

  if (processedCard) {
    dispatch(processed({ id, taskText, taskName, taskImportant, processedCard: true }));
    setProcessedCard(false);
  }

  const [doneFn, setDoneFn] = useState(false);

  if (doneFn) {
    dispatch(done({ id, taskText, taskName, taskImportant, doneCard: true }));
    setDoneFn(false);
  }

  const [hideRejectCard, setHideRejectCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRejectBtn(hideRejectCard);
    }, 390);
  }, [hideRejectCard]);

  const [hideProcessedCard, setHideProcessedCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProcessedCard(hideProcessedCard);
    }, 390);
  }, [hideProcessedCard]);

  const [hideDoneCard, setHideDoneCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDoneFn(hideDoneCard);
    }, 390);
  }, [hideDoneCard]);

  return (
    <div
      className={
        hideRejectCard || hideProcessedCard || hideDoneCard ? styles.hide : styles.taskCard
      }
      key={id}
    >
      <div
        className={
          hideRejectCard || hideProcessedCard || hideDoneCard
            ? styles.hideContainer
            : styles.container
        }
      >
        <div className={styles.titleWrapper}>
          <h4 className={styles.taskName}>
            {newTitleName.length > 35 ? newTitleName.slice(0, 35) + "..." : newTitleName}{" "}
          </h4>
          <div className={styles.important}>
            <span className={styles.timer}>{taskImportant}</span>
            <div
              className={
                time <= 60 ? styles.pingRed : time < 120 ? styles.pingYellow : styles.pingGreen
              }
            ></div>
          </div>
        </div>

        <p className={styles.taskTitle}>
          {newText.length > 100 ? newText.slice(0, 100) + "..." : newText}{" "}
        </p>
        <div className={styles.actionButtons}>
          <button
            className={styles.moreBtn}
            onClick={() => {
              setUseMoreDetails(true);
            }}
          >
            More details
          </button>
          <button
            className={disable || doneCard ? styles.disable : styles.rejectBtn}
            onClick={() => {
              setHideRejectCard(true);
            }}
          >
            Reject
          </button>
          {processedCard1 ? (
            <button className={styles.doneBtn} onClick={() => setHideDoneCard(true)}>
              Done
            </button>
          ) : (
            <button
              className={disable || doneCard ? styles.disable : styles.executeBtn}
              onClick={() => setHideProcessedCard(true)}
            >
              {doneCard ? "Done" : "Execute"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
