import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <a href="#" className={styles.header__logo}>
            <h1 className={styles.header__title}>Scrum Master</h1>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
