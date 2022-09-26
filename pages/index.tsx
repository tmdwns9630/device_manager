import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Counter from "../components/Counter";
import styles from "../styles/Home.module.css";

import client from "../libs/server/client";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  //<>로 자동완성 쓸 수 있게 된다.

  function 사용자추가함수() {
    console.log("사용자 추가 함수가 클릭되었습니다.");
    fetch("/api/adduser");
  }

  useEffect(() => {
    fetch("/api/alluser")
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
    // console.log(users);
  }, []);
  return (
    <div>
      <div className="">Hello World</div>
      <Counter title={[1, 2, 3, 4, 5]} subtitle="타입스크립트" />
      <button className="bg-gray-300 p-2 rounded m-2" onClick={사용자추가함수}>
        사용자 추가 함수
      </button>

      <div className="flex flex-wrap">
        {users.map((user) => (
          <div key={user.name} className="border-2">
            <div className="text-2xl pa">
              <span className="mr-3">{user.name}</span>
              <span>({user.age})세</span>
            </div>
            <div>{user.addr}</div>
            <div>{user.favfood}</div>
            <div className="text-zinc-600">
              <div>{user.createAt.toString()}</div>
              <div>{user.updateAt.toString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
//dateTime에 빨간 줄 그어져 있으면 toString 메서드를 쓴다.
export default Home;
