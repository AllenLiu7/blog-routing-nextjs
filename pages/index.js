import Head from 'next/head'
import Article from '../components/Article.jsx'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {

  //console.log(posts)

  return (
    <div className={styles.container}>
      <Head>
        <title>My Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Blog 
        </h1>

        <p className={styles.description}>
        Share you ideas
        </p>

        <div className={styles.grid}>
          {posts.map(post=>{
           return <Article post={post}/>
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="www.workwithallenliu.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        Check out my portfolio
        </a>
      </footer>
    </div>
  )
}



export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10');
  const posts = await res.json();

  return {
    props:{
      posts
    }
  }
}