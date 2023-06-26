import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer: FunctionComponent = () => {
  return (
    <footer>
      <div className={styles.container}>
        <Link href="/q-and-a">
          <div className={styles.text_container}>
            Вопросы-ответы
          </div>
        </Link>

        <Link href="/about-us">
          <div className={styles.text_container}>
            О нас
          </div>
        </Link>
      </div>
    </footer>
  );
}
