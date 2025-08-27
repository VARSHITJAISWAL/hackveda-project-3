import styles from './ComE.module.css';

function ComE() {
  return (
    <div className={styles.fix}>
    <div className={styles.bottomBar}>
      <span className={styles.item}>Home</span>

      <span className={styles.item}>Toll Free – 1950</span>

      <div className={styles.socialGroup}>
        <span className={styles.item}>Facebook</span>
        <span className={styles.item}>Instagram</span>
        <span className={styles.item}>YouTube</span>
      </div>

      <span className={styles.link}>Screen Reader Access</span>

      <span className={styles.link}>Skip to Main Content</span>
    </div>
    </div>
  );
}

export default ComE;
