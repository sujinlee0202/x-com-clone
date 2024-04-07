"use client";

import { useRouter } from "next/navigation";
import HomeComponent from "../_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <HomeComponent />;
}

// push
// localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
// /i/flow/login 에서 뒤로가기를 했을 때 /login 으로 이동하게 된다. (이전 위치)
// 하지만 이 경우 /login은 /i/flow/login으로 redirect시키므로 무한 루프에 빠지게 된다.

// replace
// localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
// /i/flow/login에서 뒤로가기를 눌렀을 때 localhost:3001로 이동하게 된다.
// replace는 이동을 하면 이전 링크의 history를 지운다.
// 따라서 위의 경우는 localhost:3001 -> localhost:3001/i/flow/login이 되므로 /i/flow/login에서 뒤로가기를 했을 때 localhost:3001로 이동하게 된다.
