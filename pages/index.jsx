import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start the basic</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Image
          src='/images/profile.jpg' // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt='Your Name'
        />
      </main>
    </div>
  );
}
