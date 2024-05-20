/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./Follow.module.css";

export default function Follow() {
  const user = {
    image: "/zlogo.png",
    id: "titch",
    nickname: "티치캣",
  };

  const onFollow = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.userLogoSection}>
        <div className={styles.userLogo}>
          <img src={user.image} alt={user.id}></img>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.title}>{user.nickname}</div>
        <div className={styles.count}>@{user.id}</div>
      </div>
      <div className={styles.followButton}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
