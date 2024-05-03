"use client";

import Image from "next/image";
import React from "react";
import styles from "./LogoutButton.module.css";

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "titch",
    nickname: "titch",
    image: "/titch.jpg", // 서버에서 이미지 불러올 예정
  };

  const onLogout = () => {};

  return (
    <button className={styles.logOutButton} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <Image src={me.image} alt={me.id} width='20' height='20' />
      </div>
      <div className={styles.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
