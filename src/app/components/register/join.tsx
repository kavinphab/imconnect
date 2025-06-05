"use client";
import { useEffect, useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

type Team = {
  id: string;
  teamName: string;
  captain: string;
  division: string;
  rosterSize: number;
  rosterBreakdown: string;
  status: string;
  freeAgentWanted: boolean;
};

export default function TeamListPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedDivision, setSelectedDivision] = useState("All");

  useEffect(() => {
    const fetchTeams = async () => {
      const snapshot = await getDocs(collection(db, "teams"));
      const loadedTeams: Team[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Team[];
      setTeams(loadedTeams);
    };

    fetchTeams();
  }, []);

  const divisions = ["All", "Men", "Women", "CoRec"];

  const filteredTeams = selectedDivision === "All"
    ? teams
    : teams.filter(team => team.division === selectedDivision);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-bold">Teams</h2>
          <select
            className="bg-yellow-400 text-white border-none rounded px-3 py-1"
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
          >
            {divisions.map(div => (
              <option key={div} value={div}>{div}</option>
            ))}
          </select>
        </div>

        <div className="divide-y">
          {filteredTeams.map(team => (
            <div key={team.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
              <div>
                <p className="font-semibold text-blue-600">{team.teamName}</p>
                <p className="text-sm text-gray-600">{team.captain}</p>
              </div>
              <div className="text-center text-sm text-gray-800 w-24">
                <p className="text-green-600 font-bold">{team.rosterSize}</p>
                <p>{team.rosterBreakdown}</p>
              </div>
              <div className="text-green-600 w-20 text-sm font-medium">{team.status}</div>
              <div className="w-24 text-center text-sm">
                {team.freeAgentWanted ? "Yes" : "No"}
              </div>
              <button className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded border hover:bg-gray-300">
                Join Team
              </button>
            </div>
          ))}
          {filteredTeams.length === 0 && (
            <div className="p-4 text-center text-gray-500">No teams in this division.</div>
          )}
        </div>
        
      </div>
      <div className="mt-6 flex justify-center">
  <Link href="/registerteam">
    <span className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
      Create New Team
    </span>
  </Link>
</div>
    </div>
    
  );
}
