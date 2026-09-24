import styles from './loadingskeleton.module.css';

function LoadingSkeleton() {
  return (
    <div className={styles.container} aria-busy="true" aria-label="Carregando dados financeiros">
      <div className={styles.grade}>
        <div className={`${styles.bloco} ${styles.card}`} />
        <div className={`${styles.bloco} ${styles.card}`} />
        <div className={`${styles.bloco} ${styles.card}`} />
      </div>
      <div className={`${styles.bloco} ${styles.grafico}`} />
      <div className={`${styles.bloco} ${styles.tabela}`} />
    </div>
  );
}

export default LoadingSkeleton;