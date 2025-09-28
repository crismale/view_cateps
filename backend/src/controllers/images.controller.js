import pool from "../services/db.js";

// Obtener imágenes desde la tabla scenes
export const getImages = async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, imagen_url AS url, description, kind, floor, tower, orientation FROM scenes ORDER BY id ASC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error obteniendo imágenes desde la BBDD" });
  }
};