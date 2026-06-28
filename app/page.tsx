"use client";

import { roundOf32 } from "../data/matches";
import MatchCard from "../components/MatchCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-4xl font-bold text-center">
        ⚽ World Cup 2026
      </h1>

      <p className="text-center text-gray-400 mb-10">
        Round of 32 Predictions
      </p>

      <div className="max-w-xl mx-auto">

        {roundOf32.map((match) => (
          <MatchCard
            key={match.id}
            team1={match.team1}
            team2={match.team2}
          />
        ))}

      </div>

    </main>
  );
}