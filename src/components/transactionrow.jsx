import CategoryIcon from './categoryicon';
import { formatarMoeda, formatarData } from '../utils/format';
import styles from './transactionstable.module.css';

function TransactionRow({ transacao }) {
  const positiva = transacao.tipo === 'entrada';

  return (
    <tr className={styles.linha}>
      <td>
        <div className={styles.descricaoCelula}>
          <CategoryIcon categoriaId={transacao.categoria} />
          <span>{transacao.descricao}</span>
        </div>
      </td>
      <td className={styles.dataCelula}>{formatarData(transacao.data)}</td>
      <td className={`${styles.valorCelula} ${positiva ? styles.positivo : ''}`}>
        {positiva ? '+' : '−'} {formatarMoeda(transacao.valor)}
      </td>
    </tr>
  );
}

export default TransactionRow;