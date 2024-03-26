import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/page.module.css";

type Props = {
  children: ReactNode;
  modal: React.ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
