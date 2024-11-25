import Link from "next/link";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <h6 className={styles.welcome}>Salut les passionnés ! Je suis</h6>
        <h1 className={styles.title}>Usman Mughal</h1>
        <h3 className={styles.subtitle}>&lt;!-- Développeur Web --&gt;</h3>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.contained}>Que puis-je faire ?</button>
          </Link>
          <Link href="/contact">
            <button className={styles.outlined}>Contactez-moi</button>
          </Link>
        </div>
      </div>
    </>
  );
}
