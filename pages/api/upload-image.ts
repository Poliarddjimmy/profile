// pages/api/upload-image.ts

import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const busboy = require('busboy');
    const bb = busboy({ headers: req.headers });

    let uploadedFilePath = '';
    
    bb.on('file', (name: any, file: any, info: any) => {
      const { filename, encoding, mimeType } = info;
      const saveTo = path.join(process.cwd(), 'public', 'uploads', filename);
      file.pipe(fs.createWriteStream(saveTo));
      uploadedFilePath = `/uploads/${filename}`;
    });

    bb.on('close', () => {
      res.status(200).json({ message: 'File uploaded successfully', filePath: uploadedFilePath });

    });

    req.pipe(bb);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}