import { Bell } from'lucide-react';
import styles from'./topbar.module.css';

function TopBar ({titulo, subtitulo}) {
    return (
        <header className={styles.topbar}>
            <div>
                <h1 className={styles.titulo}>{titulo}</h1>
                {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
            </div>

            <div className={styles.acoes}>
                <button type="button" className={styles.botaoIcone} aria-label="Notificações">
                    <Bell size={18} strokeWidth={2} />
                </button>
                <div className={styles.avatar} aria-hidden="true"></div>
            </div>
        </header>
    );
}

export default TopBar;