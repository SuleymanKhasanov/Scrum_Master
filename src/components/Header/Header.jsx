import styles from "./Header.module.css";
import logo from "./img/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <a href="#" className={styles.header__logo}>
            <img src={logo} alt="logo" className={styles.logo} />
            <h1 className={styles.header__title}>Swift</h1>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
