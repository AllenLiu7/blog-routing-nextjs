import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Article({post}){
    return(
        <>
        <Link href={`/blog/${post.id}`}>
            <a href="#" className={styles.card}>
                <h3>{post.title}</h3>
                <p>Click to find more</p>
            </a>
        </Link>
        </>
    )
}