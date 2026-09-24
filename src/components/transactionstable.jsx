import { useState, useMemo } from 'react';
import FilterBar from './filterbar';
import TransactionRow from './transactionrow';
import EmptyState from './emptystate';
import styles from './transactionstable.module.css';

function TransactionsTable({ transacoes, categorias }) {
  const [busca, setBusca] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('todas');

  const transacoesFiltradas = useMemo(() => {
    return transacoes
      .filter((t) => {
        const bateBusca = t.descricao.toLowerCase().includes(busca.toLowerCase());
        const bateCategoria = categoriaFiltro === 'todas' || t.categoria === categoriaFiltro;
        return bateBusca && bateCategoria;
      })
      .sort((a, b) => new Date(b.data) - new Date(a.data));
  }, [transacoes, busca, categoriaFiltro]);

  const temFiltroAtivo = busca !== '' || categoriaFiltro !== 'todas';

  function limparFiltros() {
    setBusca('');
    setCategoriaFiltro('todas');
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.titulo}>Transações</h2>

      <FilterBar
        busca={busca}
        aoMudarBusca={setBusca}
        categoriaFiltro={categoriaFiltro}
        aoMudarCategoria={setCategoriaFiltro}
        categorias={categorias}
      />

      {transacoesFiltradas.length === 0 ? (
        <EmptyState
          titulo="Nenhuma transação encontrada"
          descricao={temFiltroAtivo ? 'Tente ajustar os filtros de busca.' : 'Ainda não há transações registradas.'}
          aoLimpar={temFiltroAtivo ? limparFiltros : undefined}
        />
      ) : (
        <div className={styles.tabelaWrapper}>
          <table className={styles.tabela}>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Data</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {transacoesFiltradas.map((t) => (
                <TransactionRow key={t.id} transacao={t} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TransactionsTable;