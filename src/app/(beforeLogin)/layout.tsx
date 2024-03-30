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

// 주소가 z-com (localhost:3000)일 때 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3000/i/flow/login일 때 children->i/flow/login/page.tsx, modal->@modal/iflow/login/page.tsx
