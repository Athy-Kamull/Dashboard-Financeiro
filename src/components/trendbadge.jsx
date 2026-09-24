import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { formatarPercentual } from "../utils/format";
import styles from "./trendbadge.module.css";

function Trendbadge({ variacao, contextoPositivoEBom = true }) {
    const positivo = variacao >= 0;
    const bom = contextoPositivoEBom ? positivo : !positivo;
    const Icone = positivo ? ArrowUpRight : ArrowDownRight;

    return (
        <span className={`${styles.badge} ${bom ? styles.bom : styles.ruim}`}>
            <Icone size={14} strokeWidth={2.5} aria-hidden="true" />
            {formatarPercentual(variacao)}
        </span>
    );
}

export default Trendbadge;