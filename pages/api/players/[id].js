import fetch from "node-fetch";

export default async (req, res) => {
  const { id } = req.query;

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/players";
    const url = `${baseUrl}/${id}`;

    console.log("Fetching player data from URL:", url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Player not found: ${id}`);
    }

    const data = await response.json();
    console.log("Player data fetched:", data);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching player:", error);
    res.status(404).json({ error: `Failed to fetch player: ${id}` });
  }
};
