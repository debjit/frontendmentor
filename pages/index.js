import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Debjit Biswas project for front end mentor using tailwind and next.js</title>
        <meta
          name="description"
          content="Debjit Biswas project for front end mentor using tailwind and next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          Project for frontendmentor.io using tailwind and next.js by (Debjit Biswas) 
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://debjit.in" target="_blank" rel="noopener noreferrer">
          Created By Debjit by{" "}
          <span className={styles.logo}>
            <Image
              src="/avatar.jpg"
              alt="Debjit.in Logo"
              width={64}
              height={64}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
