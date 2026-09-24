import { Inbox } from 'lucide-react';
import styles from './emptystate.module.css';

function EmptyState({ titulo, descricao, aoLimpar }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconeContainer} aria-hidden="true">
        <Inbox size={22} strokeWidth={1.5} />
      </div>
      <p className={styles.titulo}>{titulo}</p>
      <p className={styles.descricao}>{descricao}</p>
      {aoLimpar && (
        <button type="button" className={styles.botao} onClick={aoLimpar}>
          Limpar filtros
        </button>
      )}
    </div>
  );
}

export default EmptyState;