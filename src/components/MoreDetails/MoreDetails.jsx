import { useSelector } from "react-redux";
import styles from "./MoreDetails.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";

const MoreDetails = () => {
  const data = useSelector((state) => state.moreDetails || []);

  const [openWindow, setOpenWindow] = useState(false);

  const isOpen = data.some((item) => item.show === true);

  useEffect(() => {
    setOpenWindow(isOpen);
  }, [data]);

  const text = data[data.length - 1] !== undefined ? data[data.length - 1].taskText : "";

  const textArr = text.split(" ");

  return (
    <div className={openWindow === false ? styles.hideWrapper : styles.bluredWrapper}>
      <div className={openWindow === false ? styles.hideDetails : styles.moreDetails}>
        <div className="hideBtn">
          <button className={styles.clouseBtn} onClick={() => setOpenWindow(false)}>
            <IoIosCloseCircle />
          </button>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>
            <h3 className={styles.headingTitle}>
              {data[data.length - 1] !== undefined ? data[data.length - 1].taskName : null}
            </h3>
            <span className={styles.important}>
              {data[data.length - 1] !== undefined ? data[data.length - 1].taskImportant : null}
            </span>
          </div>
          <p className={styles.text}>
            {textArr.map((parts, i) => {
              return (
                <span className={styles.highlight} key={i}>
                  {parts}{" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
