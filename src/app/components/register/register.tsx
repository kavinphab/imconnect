"use client";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

export default function HomePage() {
  const [teamName, setTeamName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [division, setDivision] = useState("Men");
  const [freeAgentWanted, setFreeAgentWanted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "teams"), {
        teamName,
        captain: name,
        email,
        phone,
        shirtSize,
        division,
        freeAgentWanted,
        status: "Pending",
        timestamp: serverTimestamp(),
      });
      alert("Team registered successfully!");

      // Reset form
      setTeamName("");
      setName("");
      setEmail("");
      setPhone("");
      setShirtSize("");
      setDivision("Men");
      setFreeAgentWanted(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error registering team.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register a Team</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Team Name</label>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Captain Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">T-shirt Size</label>
            <input
              type="text"
              value={shirtSize}
              onChange={(e) => setShirtSize(e.target.value)}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Division</label>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="w-full border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Men</option>
              <option>Women</option>
              <option>CoRec</option>
            </select>
          </div>


          <div className="flex items-center">
            <input
              type="checkbox"
              checked={freeAgentWanted}
              onChange={(e) => setFreeAgentWanted(e.target.checked)}
              className="mr-2"
            />
            <label className="text-gray-700">Open to Free Agents</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Register Team
          </button>
        </form>
      </div>
    </div>
  );
}
