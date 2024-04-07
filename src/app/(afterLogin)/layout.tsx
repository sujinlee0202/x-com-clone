import { ReactNode } from "react";
import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import zlogo from "@/../public/zlogo.png";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            {/** home으로 이동하는 로고 */}
            <Link className={styles.logo} href='/home'>
              <div className={styles.logoPill}>
                <Image src={zlogo} alt='z.com logo' width={40} height={40} />
              </div>
            </Link>
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <form className={styles.search}>
              <input type='text'></input>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
