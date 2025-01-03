"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Player() {
  const params = useParams();
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);

  const formatHeight = (height) => {
    if (!height || height.length !== 4) return "N/A";
    return `${height.slice(0, 2)}'${height.slice(2, 4)}"`;
  };

  useEffect(() => {
    async function fetchPlayer() {
      try {
        if (!params?.id) {
          setError("No player ID provided");
          return;
        }

        const res = await fetch(`/api/players/${params.id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch player: ${res.status}`);
        }

        const [playerData] = await res.json();
        console.log("Received player data:", playerData);
        setPlayer(playerData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching player:", err);
      }
    }
    fetchPlayer();
  }, [params?.id]);

  if (error) return <div className="error">{error}</div>;
  if (!player) return <div className="loading">Loading...</div>;

  return (
    <div className="player-details">
      <h1>{`${player.name.first_name} ${player.name.last_name}`}</h1>
      <div>{`${player.position[0]} | ${player.grad_year}`}</div>
      <div>{`${formatHeight(player.measurements.height)} | ${
        player.measurements.weight
      } lbs`}</div>
      <div className="maxes">
        <h2>Maxes</h2>
        <ul>
          <li>Bench: {player.maxes.bench}</li>
          <li>Squat: {player.maxes.squat}</li>
          <li>Clean: {player.maxes.clean}</li>
          <li>Vertical: {player.maxes.vertical}"</li>
          <li>40 Time: {player.maxes["40"]}s</li>
        </ul>
      </div>
    </div>
  );
}
