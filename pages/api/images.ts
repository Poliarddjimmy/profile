
import prisma from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    images: any
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<Data>) {
  const images = await prisma.image.findMany();
  res.json(images);
}