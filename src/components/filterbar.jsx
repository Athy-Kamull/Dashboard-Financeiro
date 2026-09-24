import { Search } from 'lucide-react';
import styles from './filterbar.module.css';

function Filterbar({ busca, aoMudarBusca, categoriaFiltro, aoMudarCategoria, categorias}) {
    return (
        <div className={styles.barra}>
            <div className={styles.campoBusca}>
                <Search size={16} strokeWidth={2} className={styles.iconeBusca} aria-hidden="true" />
                <input
                 type="text"
                 placeholder="Buscar transação..."
                 value={busca}
                 onChange={(evento) => aoMudarBusca(evento.target.value)}
                 aria-label="Buscar transação por descrição"
                />
            </div>

            <select
             value={categoriaFiltro}
             onChange={(evento) => aoMudarCategoria(evento.target.value)}
             aria-label="Filtrar por categoria"
            >
                <option value="todas">Todas as categorias</option>
                {categorias.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.nome}</option>
                ))}
            </select>
        </div>
    );
}

export default Filterbar;