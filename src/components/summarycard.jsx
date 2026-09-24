import { formatarMoeda } from '../utils/format';
import TrendBadge from './trendbadge';
import styles from './summarycard.module.css';

function SummaryCard ({ rotulo, valor, variacao, contextoPositivoEBom, Icone, destaque = false}) {
    return (
      <div className={`${styles.card} ${destaque ? styles.destaque : ''}`}>
        <div className={styles.cabecalho}>
            <span className={styles.rotulo}>{rotulo}</span>
            <div className={styles.iconeContainer} aria-hidden="true">
                <Icone size={16} strokeWidth={2} />
        </div>
       </div>

       <p className={styles.valor}>{formatarMoeda(valor)}</p>

       <div className={styles.rodape}>
        <TrendBadge variacao={variacao} contextoPositivoEBom={contextoPositivoEBom} />
        <span className={styles.comparacaop}>Comparado ao mês anterior</span>
       </div>
      </div>
    );
}

export default SummaryCard;