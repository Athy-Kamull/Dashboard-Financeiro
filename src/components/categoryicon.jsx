import { Home, UtensilsCrossed, Car, Ticket, HeartPulse, Wallet } from 'lucide-react';
import styles from './categoryicon.module.css';

const mapaIcones = { 
    moradia: Home,
    alimentacao: UtensilsCrossed,
    transporte: Car,
    lazer: Ticket,
    saude: HeartPulse,
    receita: Wallet,
};

function CategoryIcon ({ categoriaId }) {
    const Icone = mapaIcones[categoriaId] ?? Wallet;

    return (
        <div className={styles.container} style = {{ '--cor-categoria': `var(--chart-${indiceCor(categoriaId)})` }}>
            <Icone size={16} strokeWidth={2} aria-hidden="true" />
        </div>
    );
}

function indiceCor (categoriaId) {
    const ordem = ['moradia', 'alimentacao', 'transporte', 'lazer', 'saude'];
    const posicao = ordem.indexOf(categoriaId);
    return posicao === -1 ? 1 : posicao + 1;
}

export default CategoryIcon;