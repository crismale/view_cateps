import pool from "../services/db.js";

export async function getAllScenes() {
  const { rows } = await pool.query(
    "SELECT id, imagen_url AS url, description, kind, floor, tower, orientation FROM scenes ORDER BY id ASC"
  );
  return rows;
}
