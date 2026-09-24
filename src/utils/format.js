export function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    });
}

export function formatarData (dataISO){
    const data = new Date(dataISO + 'T00:00:00');
    return data.toLocaleDateString('pt-BR',{
        day: '2-digit',
        month: 'short',
    });
}

export function formatarPercentual(valor) {
    const sinal = valor > 0 ? '+' : '';
    return `${sinal}${valor.toFixed(1)}%`;
}