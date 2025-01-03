import fetch from "node-fetch";

export default async (req, res) => {
  try {
    const url =
      process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/players";

    console.log("Fetching all players from URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    console.log("Players data fetched:", data);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ error: "Failed to fetch players list" });
  }
};
