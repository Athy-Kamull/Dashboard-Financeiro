export function calcularResumo(transacoes) {
    const entradas = transacoes
    .filter((t) => t.tipo === 'entrada')
    .reduce((soma, t) => soma + t.valor, 0);

    const saidas = transacoes
    .filter((t) => t.tipo === 'saida')
    .reduce((soma, t) => soma + t.valor, 0);

    const saldo = entradas - saidas

    return {entradas, saidas, saldo}
}

export function calcularVariacao(atual, anterior) {
    if (anterior === 0) return 0;
    return((atual - anterior) / anterior) * 100;
}

export function agruparPorCategoria(transacoes, categorias) {
    const totais = {};

    transacoes
    .filter((t) => t.tipo === 'saida')
    .forEach((t) => {
        totais[t.categoria] = (totais[t.categoria] || 0) + t.valor;
    });

    return Object.entries(totais).map(([id, valor]) => {
        const categoria = categorias.find((c) => c.id === id);
        return {
            id,
            nome: categoria?.nome ?? id,
            cor: categoria?.cor ?? 'var(--text-muted)',
            valor,
        };
    });
}    
