import fetch from "node-fetch";

export default async (req, res) => {
  const { id } = req.query;

  console.log("API request received", { id });

  try {
    let url =
      process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/players";

    if (id) {
      url = `${url}/${id}`;
    }

    console.log("Fetching data from URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    console.log("Data fetched:", data);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data from remote URL" });
  }
};
