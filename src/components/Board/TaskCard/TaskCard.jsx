import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { moreDetails } from "../../../redux/sliceMoreDetails";
import { reject } from "../../../redux/sliceReject";
import { useSelector } from "react-redux";
import styles from "./TaskCard.module.css";
import { deleteCard } from "../../../redux/sliceDelete";
import { createNewTask } from "../../../redux/slice";

function TaskCard({ id, taskText, taskName, taskImportant }) {
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

  return (
    <div className={styles.taskCard} key={id}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h4 className={styles.taskName}>
            {newTitleName.length > 35 ? newTitleName.slice(0, 35) + "..." : newTitleName}{" "}
          </h4>
          <div className={styles.important}>
            <span className={styles.timer}>{taskImportant}</span>
            <div
              className={
                timeImportant - currentTime <= 60
                  ? styles.pingRed
                  : timeImportant - currentTime < 120
                  ? styles.pingYellow
                  : styles.pingGreen
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
            className={disable ? styles.disable : styles.rejectBtn}
            onClick={() => {
              setRejectBtn(true);
            }}
          >
            Reject
          </button>
          <button className={disable ? styles.disable : styles.executeBtn}>Execute</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
