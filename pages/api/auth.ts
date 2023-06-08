import axios from 'axios';
import { parse, serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  let newData = await axios.post(
    'http://localhost:9090/api/patient-app/v1/authenticate',
    req.body
  );

  console.log(parse((newData.headers['set-cookie'] as string[])[1]));

  // res.setHeader(
  //   'Set-Cookie',
  //   serialize('token', "", {
  //     httpOnly: false,
  //     secure: false,
  //     sameSite: 'lax',
  //     path: '/',
  //   })
  // );

  res.status(200).json({ success: true });
};
