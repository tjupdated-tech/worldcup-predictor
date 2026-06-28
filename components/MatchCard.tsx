type MatchCardProps = {
  team1: string;
  team2: string;
};

export default function MatchCard({ team1, team2 }: MatchCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-5 shadow-lg mb-4">

      <button className="w-full text-left bg-slate-700 hover:bg-green-600 transition p-3 rounded-lg mb-2">
        {team1}
      </button>

      <button className="w-full text-left bg-slate-700 hover:bg-green-600 transition p-3 rounded-lg">
        {team2}
      </button>

    </div>
  );
}