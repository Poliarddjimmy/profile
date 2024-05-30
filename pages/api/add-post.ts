import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      const title = data.title as string;
      const content = data.content as string;
      const image = data.image as string;
      
      // create a slug with the title
      const slug = title.toLowerCase().replace(/ /g, '-');
      
      if (!title || !content) throw new Error('Title and content are required');
      await sql`INSERT INTO Posts (Title, Content, Image, Slug) VALUES (${title}, ${content}, ${image}, ${slug})`;
    } catch (error) {
      return res.status(500).json({ error });
    }
    res.status(200).json({ message: 'Data received', data });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}