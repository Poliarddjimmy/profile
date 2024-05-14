import { getImage } from "../../utils/formidable";
import { uploadImage } from "../../utils/cloudinary";
import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
};

type Data = {
    images: any
}

export default async function handle(req: NextApiRequest, res: NextApiResponse<Data>) {
  const imageUploaded = await getImage(req);

  const imageData: any = await uploadImage(imageUploaded.path);

  const result = await prisma.image.create({
    data: {
      publicId: imageData.public_id,
      format: imageData.format,
      version: imageData.version.toString(),
    },
  });

  res.json(result);
}