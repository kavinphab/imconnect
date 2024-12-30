'use client'
import { db } from '../firebaseConfig'
import React, { useState } from 'react'
import  { collection, addDoc }  from 'firebase/firestore'

async function addData(sport:string, division:string, team:string, name:string, email:string) {
  try{
    const docRef = await addDoc(collection(db, sport), {
      name: name,
      email: email,
      team: team,
      division: division,
      sport:sport
    });
    console.log("Team member added with ID ", docRef.id);
    return true;
  } catch(error) {
    console.error("Error with adding member ", error)
    return false;
  }
}

export default function Home() {
  const [name, setName ] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [division, setDivision] = useState<string>("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const added = await addData(division, sport, name, email, team);
    if(added) {
      setName("");
      setEmail("");
      setTeam("");
      setDivision("");
      alert("Data added to Firestore");
    }
  }

  return (
    <div>
      <h1 className='flex justify-center h-11 items-center text-5xl font-bold m-10'>
        IMConnect
      </h1>
      <br/>
      <div>
        <h2 className='flex justify-center font-semibold m-5'>
          Register to join a team
        </h2>
        <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-lg'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-grey-700 mb-2 font-bold'>
              Name:
            </label>
            <input 
              type='text'
              id='name'
              className='border-solid border-2 border-black'
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='team' className='block text-grey-700 mb-2 font-bold'>
              Team:
            </label>
            <input 
              type='text'
              id='team'
              className='border-solid border-2 border-black'
              onChange={(e) => setTeam(e.target.value)}
            />
            <label htmlFor='email' className='block text-grey-700 mb-2 font-bold'>
              email:
            </label>
            <input 
              type='email'
              id='email'
              className='border-solid border-2 border-black'
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='text-center'>
              <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg px-4 mt-5'
              >
                Submit
              </button>
            </div>
            
            
          </div>
        </form>
      </div>
    </div>
  )
}

// export default page
