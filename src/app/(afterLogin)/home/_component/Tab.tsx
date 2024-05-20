"use client";

import React, { useContext, useState } from "react";
import styles from "./Tab.module.css";
import { TabContext } from "./TabProvider";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };

  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeText}>홈</div>
      <div className={styles.homeTab}>
        <div onClick={onClickRec}>
          추천
          <div className={styles.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div onClick={onClickFol}>
          팔로우 중
          <div className={styles.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
