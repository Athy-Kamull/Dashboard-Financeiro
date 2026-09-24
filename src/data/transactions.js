const categorias = [
  { id: 'moradia', nome: 'Moradia', cor: 'var(--chart-1)' },
  { id: 'alimentacao', nome: 'Alimentação', cor: 'var(--chart-2)' },
  { id: 'transporte', nome: 'Transporte', cor: 'var(--chart-3)' },
  { id: 'lazer', nome: 'Lazer', cor: 'var(--chart-4)' },
  { id: 'saude', nome: 'Saúde', cor: 'var(--chart-5)' },
  { id: 'receita', nome: 'Receita', cor: 'var(--brand)' },
];

const transacoes = [
  { id: 1, data: '2026-09-01', descricao: 'Salário', categoria: 'receita', valor: 6500, tipo: 'entrada' },
  { id: 2, data: '2026-09-02', descricao: 'Aluguel', categoria: 'moradia', valor: 1800, tipo: 'saida' },
  { id: 3, data: '2026-09-03', descricao: 'Supermercado Extra', categoria: 'alimentacao', valor: 342.50, tipo: 'saida' },
  { id: 4, data: '2026-09-04', descricao: 'Uber', categoria: 'transporte', valor: 28.90, tipo: 'saida' },
  { id: 5, data: '2026-09-05', descricao: 'Cinema', categoria: 'lazer', valor: 65, tipo: 'saida' },
  { id: 6, data: '2026-09-06', descricao: 'Farmácia', categoria: 'saude', valor: 89.30, tipo: 'saida' },
  { id: 7, data: '2026-09-07', descricao: 'iFood', categoria: 'alimentacao', valor: 47.80, tipo: 'saida' },
  { id: 8, data: '2026-09-08', descricao: 'Academia', categoria: 'saude', valor: 120, tipo: 'saida' },
  { id: 9, data: '2026-09-10', descricao: 'Freelance', categoria: 'receita', valor: 900, tipo: 'entrada' },
  { id: 10, data: '2026-09-12', descricao: 'Conta de luz', categoria: 'moradia', valor: 210.40, tipo: 'saida' },
  { id: 11, data: '2026-09-13', descricao: 'Gasolina', categoria: 'transporte', valor: 180, tipo: 'saida' },
  { id: 12, data: '2026-09-15', descricao: 'Streaming (Netflix)', categoria: 'lazer', valor: 39.90, tipo: 'saida' },
  { id: 13, data: '2026-09-16', descricao: 'Restaurante', categoria: 'alimentacao', valor: 156, tipo: 'saida' },
  { id: 14, data: '2026-09-18', descricao: 'Internet', categoria: 'moradia', valor: 99.90, tipo: 'saida' },
  { id: 15, data: '2026-09-20', descricao: 'Consulta médica', categoria: 'saude', valor: 250, tipo: 'saida' },
];

export function buscarTransacoes() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const falhaAleatoria = Math.random() < 0.05;
            if (falhaAleatoria) {
                reject(new Error('Falha ao carregar transações'));    
            } else {
                resolve({transacoes, categorias});
            }
        }, 800);
    });
}

export { categorias };

export const resumoMesAnterior = {
    entradas: 6100,
    saidas: 5230,
};
