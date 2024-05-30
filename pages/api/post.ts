import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let { slug } = req.query
    slug = slug as string
    
    const { rows, fields } =
    await sql`SELECT * FROM posts WHERE slug=${slug} LIMIT ${1}`;
    
    res.status(200).json({ post: rows[0] });
  
  } catch (error: any) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: error.message });
  }
}