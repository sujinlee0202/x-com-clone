import Link from "next/link";
import React from "react";
import styles from "./Trend.module.css";

export default function Trend() {
  const user = {
    category: "실시간 트렌드",
    title: "스티치",
    count: 1234,
  };

  return (
    <Link href={"/search?q=트랜드"} className={styles.container}>
      <div className={styles.count}>{user.category}</div>
      <div className={styles.title}>{user.title}</div>
      <div className={styles.count}>{user.count} posts</div>
    </Link>
  );
}
