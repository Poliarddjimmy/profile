import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await sql`
      CREATE TABLE IF NOT EXISTS Posts (
        Title VARCHAR(255),
        Content TEXT
      );
    `;
    res.status(200).json({ result });
  } catch (error: any) {
    console.error("Error creating table:", error);
    res.status(500).json({ error: error.message });
  }
}
