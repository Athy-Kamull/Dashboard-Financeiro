import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { formatarMoeda } from '../utils/format';
import styles from './spendingchart.module.css';

function TooltipCustomizado ({ active, payload }) {
    if(!active || ! payload?.lenght) return null;

    const item = payload[0].payload;

    return (
        <div className={styles.tooltip}>
            <span className={styles.tooltipCategoria}>{item.nome}</span>
            <span className={styles.tooltipValor}>{formatarMoeda(item.valor)}</span>
        </div>
    );
}

function SpendingChart({ dados }) {
    const total = dados.reduce((soma, item) => soma + item.valor, 0);

    if (dados.lenght === 0) {
        return (
            <div className={styles.card}>
                <h2 className={styles.titulo}>Gastos por categria</h2>
                <p className={styles.vazio}>Nenhum gasto rgistrado ainda</p>
            </div>
        );
    }

return (
    <div className={styles.card}>
        <h2 className={styles.titulo}></h2>

        <div className={styles.corpo}>
            <div className={styles.graficoContain}>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                         data={dados}
                         dataKey="valor"
                         nameKey="nome"
                         innerRadius={62}
                         outerRadiu={90}
                         paddingAngle={3}
                         animationDuration={600}
                        >
                            {dados.map((item) => (
                                <Cell key={item.id} fill={item.cor} stroke="var(--surface)" strokeWidth={2} />
                            ))}
                        </Pie>
                        <Tooltip content={<TooltipCustomizado />} />
                    </PieChart>
                </ResponsiveContainer>

                <div className={styles.centroGrafico}>
                    <span className={styles.centroRotulo}>Total</span>
                    <span className={styles.centroValor}>{formatarMoeda(total)}</span>
                </div>    
            </div>

            <ul className={styles.legenda}>
                {dados.map((item) => (
                    <li key={item.id} className={styles.legendaItem}>
                        <span className={styles.legendaPonto} style={{ backgroundColor: item.cor}} aria-hidden="true" />
                        <span className={styles.legendaNome}>{item.nome}</span>
                        <span className={styles.legendaValor}>{formatarMoeda(item.valor)}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export default SpendingChart;