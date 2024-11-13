import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './PostCard.module.css';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <li id={post.id} className={styles.post}>
                <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt='Imagem de capa do post' />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>           
            </li>
        </Link>
    )
}