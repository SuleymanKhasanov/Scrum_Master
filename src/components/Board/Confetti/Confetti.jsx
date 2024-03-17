import Lottie from "lottie-react";
import animationDesctop from "./../../../assets/Animation - 1710262601050.json";
import animationMobile from "./../../../assets/Animation-Mobile- 1710658633934.json";
import styles from "./Confetti.module.css";

const Confetti = ({ isMobile }) => {
  return (
    <div className={styles.animation}>
      <Lottie animationData={isMobile === true ? animationMobile : animationDesctop} loop={false} />
    </div>
  );
};

export default Confetti;
