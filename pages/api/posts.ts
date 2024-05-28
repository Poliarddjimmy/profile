import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { rows } = await sql`SELECT * FROM Posts;`;
    const posts = rows;
    
    res.status(200).json({ posts });
  } catch (error: any) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: error.message });
  }
}