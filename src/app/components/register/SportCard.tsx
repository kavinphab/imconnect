import React from 'react';
// import s from 'next/link';

// type Event = {
//   name: string;
//   link?: string;
//   dateRange: string;
//   joinDeadline: string;
//   status: string;
// };

type Props = {
  sport: string;
  season: string;
  term: string;
  // events: Event[];
};

// pages/index.js
import Link from 'next/link'

export default function SportCard({sport, term}:Props) {
  return (
    <div className="pb-11 bg-gray-100 pt-3">
      
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        
        <div className="flex items-center bg-blue-600 text-white p-4 rounded-t-lg">
          <h1 className="text-lg font-bold">{term}</h1>
        </div>
       
        <div className="p-4">
         
          <h2 className="text-2xl font-bold">{sport}</h2>

         
          <div className="space-y-4 mt-6">
            
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <Link href="/jointeam" className="text-xl font-semibold text-blue-600">Co-Rec Open</Link>
              </div>
              <div className="text-center">
                <span className="block text-blue-600 font-bold">Sep 24 5:00PM - Oct 15 5:00PM</span>
                <span className="block text-gray-500 text-sm">Join Teams Until: 11/14/24 Midnight</span>
              </div>
              <div className="text-right">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Upcoming</span>
              </div>
            </div>

           
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <Link href='/jointeam' className="text-xl font-semibold text-blue-600">Mens Open</Link>
              </div>
              <div className="text-center">
                <span className="block text-blue-600 font-bold">Sep 24 5:00PM - Oct 15 5:00PM</span>
                <span className="block text-gray-500 text-sm">Join Teams Until: 11/14/24 Midnight</span>
              </div>
              <div className="text-right">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">Upcoming</span>
              </div>
            </div>

           
            <div className="flex justify-between items-center">
              <div>
                <Link href='/jointeam' className="text-xl font-semibold text-blue-600">Womens Open</Link>
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

        <div className="p-4">
          <h4 className="text-gray-600 font-bold">Season</h4>
          <p className="text-gray-800">Oct 21 - Nov 14</p>
        </div>
      </div>

    </div>
  );
}


