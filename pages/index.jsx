import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FileWrapper from '../components/FileUpload/FileWrapper';

export default function Home() {

 

  return (
    <div className={styles.container}>
      <Head>
        <title>Log File</title>
      </Head>

      <main className={styles.main}>
       <FileWrapper />
      </main>

    </div>
  )
}
