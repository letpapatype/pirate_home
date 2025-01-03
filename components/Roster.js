"use client";
import { useEffect, useState } from "react";

export default function Roster() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/players");
      const data = await response.json();
      setPlayers(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <main>
        <h1>Oceanside Pirate Roster</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Grad Year</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={player.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "white" : "lightgrey",
                }}
              >
                <td>
                  <a href={`/roster/player/${player.id}`}>
                    {player.name.first_name} {player.name.last_name}
                  </a>
                </td>
                <td>{player.grad_year}</td>
                <td>{player.position[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
