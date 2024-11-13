import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({ children, large = null }) {
    return (
        <button className=
            {`${styles.botaoPrincipal}
              ${large ? styles.lg : ''}`}
        >{children}
        </button>
    )
}