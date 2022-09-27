//2

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/server/client";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const NewUser = await client.user.create({
      data: { name: "백메탈", age: 4, addr: "아산시" },
    });
    res.status(200).json({ name: "OKOKOK" });
  } catch (err) {
    res.status(200).json({ name: "NGNGNG" });
  }

  res.status(200).json({ name: "John Doe" });
}

//이전까지 req, res는 내부 함수나 변수의 자동 완성 리스트가 안 떴다.
// 이제는 함수 포맷 정보까지 편하게 나온다.

//client.user.create({ data: {} });
// 이 모양은 외우자.

//예제를 따라 await를 추가했다. async와 await는 한 세트이므로 async도 추가.
