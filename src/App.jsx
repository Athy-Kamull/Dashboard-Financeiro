import { useState } from 'react';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';
import Sidebar from './components/sidebar';
import TopBar from './components/topbar';
import SummaryCard from './components/summarycard';
import SpendingChart from './components/spendingchart';
import TransactionsTable from './components/transactionstable';
import LoadingSkeleton from './components/loadingskeleton';
import ErrorState from './components/errorstate';
import { useTransactions } from './hooks/transactions';
import { calcularResumo, calcularVariacao, agruparPorCategoria } from './utils/calculations';
import { resumoMesAnterior } from './data/transactions';
import styles from './App.module.css';

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('visao-geral');
  const { transacoes, categorias, carregando, erro, recarregar } = useTransactions();

  return (
    <div className={styles.layout}>
      <Sidebar paginaAtiva={paginaAtiva} aoNavegar={setPaginaAtiva} />

      <div className={styles.conteudo}>
        <TopBar titulo="Visão geral" subtitulo="Setembro de 2026" />

        <main className={styles.principal}>
          {carregando && <LoadingSkeleton />}

          {!carregando && erro && (
            <ErrorState mensagem={erro} aoTentarNovamente={recarregar} />
          )}

          {!carregando && !erro && (
            <ConteudoPrincipal transacoes={transacoes} categorias={categorias} />
          )}
        </main>
      </div>
    </div>
  );
}

function ConteudoPrincipal({ transacoes, categorias }) {
  const resumo = calcularResumo(transacoes);
  const variacaoEntradas = calcularVariacao(resumo.entradas, resumoMesAnterior.entradas);
  const variacaoSaidas = calcularVariacao(resumo.saidas, resumoMesAnterior.saidas);
  const saldoAnterior = resumoMesAnterior.entradas - resumoMesAnterior.saidas;
  const variacaoSaldo = calcularVariacao(resumo.saldo, saldoAnterior);
  const gastosPorCategoria = agruparPorCategoria(transacoes, categorias);

  return (
    <>
      <section className={styles.grade} aria-label="Resumo financeiro">
        <SummaryCard
          rotulo="Saldo do mês"
          valor={resumo.saldo}
          variacao={variacaoSaldo}
          contextoPositivoEBom={true}
          Icone={Wallet}
          destaque
        />
        <SummaryCard
          rotulo="Entradas"
          valor={resumo.entradas}
          variacao={variacaoEntradas}
          contextoPositivoEBom={true}
          Icone={TrendingUp}
        />
        <SummaryCard
          rotulo="Saídas"
          valor={resumo.saidas}
          variacao={variacaoSaidas}
          contextoPositivoEBom={false}
          Icone={TrendingDown}
        />
      </section>

      <section className={styles.segundaLinha}>
        <SpendingChart dados={gastosPorCategoria} />
      </section>

      <section>
        <TransactionsTable transacoes={transacoes} categorias={categorias} />
      </section>
    </>
  );
}

export default App;