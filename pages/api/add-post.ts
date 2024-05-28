import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const title = request.query.title as string;
    const content = request.query.content as string;
    if (!title || !content) throw new Error('Title and content are required');
    await sql`INSERT INTO Posts (Title, Content) VALUES (${title}, ${content});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const posts = await sql`SELECT * FROM Posts;`;
  return response.status(200).json({ posts });
}