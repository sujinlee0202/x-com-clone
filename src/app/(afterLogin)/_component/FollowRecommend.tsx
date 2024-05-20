import React from "react";
import styles from "./FollowRecommend.module.css";
import Follow from "./Follow";

export default function FollowRecommend() {
  return (
    <div className={styles.followRecommend}>
      <h3>팔로우 추천</h3>
      <Follow />
    </div>
  );
}
