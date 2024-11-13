import styles from './Index.module.css';
import posts from 'json/posts.json';
import PostCard from 'componentes/PostCard';

export default function Index() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => {
                return (
                    <PostCard key={post.id} post={post} />
                )
            })}
        </ul>
    )
}