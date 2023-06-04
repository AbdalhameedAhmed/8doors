import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    serialize('token', "", {
      httpOnly: false,
      secure: false,
      sameSite: 'lax',
      path: '/',
    })
  );

  res.status(200).json({ success: true });
};
