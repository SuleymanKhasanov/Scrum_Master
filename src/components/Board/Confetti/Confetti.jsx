import Lottie from "lottie-react";
import animationData from "./../../../assets/Animation - 1710262601050.json";
import styles from "./Confetti.module.css";
const Confetti = () => {
  return (
    <div className={styles.animation}>
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
};

export default Confetti;
s;
