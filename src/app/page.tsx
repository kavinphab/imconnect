// pages/index.js
import React from 'react';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Container */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        {/* Fall 2024 Header */}
        <div className="flex items-center bg-blue-600 text-white p-4 rounded-t-lg">
          <h1 className="text-lg font-bold">Fall 2024</h1>
        </div>

        {/* Main Content */}
        <div className="p-4">
          {/* Sport Title */}
          <h2 className="text-2xl font-bold">5V5 Basketball</h2>

          {/* Event List */}
          <div className="space-y-4 mt-6">
            {/* First Event - Co-Rec Open */}
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <Link href="/form" className="text-xl font-semibold text-blue-600">Co-Rec Open</Link>
              </div>
              <div className="text-center">
                <span className="block text-blue-600 font-bold">Sep 24 5:00PM - Oct 15 5:00PM</span>
                <span className="block text-gray-500 text-sm">Join Teams Until: 11/14/24 Midnight</span>
              </div>
              <div className="text-right">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Upcoming</span>
              </div>
            </div>

            {/* Second Event - Men's Open */}
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <button className="text-xl font-semibold text-blue-600">Mens Open</button>
              </div>
              <div className="text-center">
                <span className="block text-blue-600 font-bold">Sep 24 5:00PM - Oct 15 5:00PM</span>
                <span className="block text-gray-500 text-sm">Join Teams Until: 11/14/24 Midnight</span>
              </div>
              <div className="text-right">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Upcoming</span>
              </div>
            </div>

            {/* Third Event - Women's Open */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-blue-600">Womens Open</h3>
              </div>
              <div className="text-center">
                <span className="block text-blue-600 font-bold">Sep 24 5:00PM - Oct 15 5:00PM</span>
                <span className="block text-gray-500 text-sm">Join Teams Until: 11/14/24 Midnight</span>
              </div>
              <div className="text-right">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Upcoming</span>
              </div>
            </div>
          </div>
        </div>

        {/* Season Info */}
        <div className="p-4">
          <h4 className="text-gray-600 font-bold">Season</h4>
          <p className="text-gray-800">Oct 21 - Nov 14</p>
        </div>
      </div>

    </div>
  );
}
