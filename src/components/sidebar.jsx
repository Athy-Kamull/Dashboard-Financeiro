import { LayoutGrid, Receipt, PiggyBank, Settings } from 'lucide-react';
import styles from './sidebar.module.css';

const itensNavegacao = [
  { id: 'visao-geral', rotulo: 'Visão geral', icone: LayoutGrid },
  { id: 'transacoes', rotulo: 'Transações', icone: Receipt },
  { id: 'metas', rotulo: 'Metas', icone: PiggyBank },
  { id: 'ajustes', rotulo: 'Ajustes', icone: Settings },
];

function Sidebar({ paginaAtiva, aoNavegar }) {
  return (
    <nav className={styles.sidebar} aria-label="Navegação principal">
      <div className={styles.marca}>
        <div className={styles.marcaIcone} aria-hidden="true">✦</div>
        <span className={styles.marcaTexto}>Painel</span>
      </div>

      <ul className={styles.lista}>
        {itensNavegacao.map((item) => {
          const Icone = item.icone;
          const ativo = item.id === paginaAtiva;

          return (
            <li key={item.id}>
              <button
                type="button"
                className={`${styles.item} ${ativo ? styles.itemAtivo : ''}`}
                onClick={() => aoNavegar(item.id)}
                aria-current={ativo ? 'page' : undefined}
              >
                <Icone size={18} strokeWidth={2} aria-hidden="true" />
                <span>{item.rotulo}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;