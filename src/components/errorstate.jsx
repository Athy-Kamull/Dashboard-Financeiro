import { AlertTriangle } from 'lucide-react';
import styles from './errorstate.module.css';

function ErrorState({ mensagem, aoTentarNovamente }) {
  return (
    <div className={styles.container} role="alert">
      <div className={styles.iconeContainer} aria-hidden="true">
        <AlertTriangle size={22} strokeWidth={1.5} />
      </div>
      <p className={styles.titulo}>Algo deu errado</p>
      <p className={styles.descricao}>{mensagem}</p>
      <button type="button" className={styles.botao} onClick={aoTentarNovamente}>
        Tentar novamente
      </button>
    </div>
  );
}

export default ErrorState;