import React from 'react'
import Sport from '../components/register/SportCard'
// import data from '@/app/data/sports'

const page = () => {
  return (
    <div className='h-screen'>
        <Sport sport = {"Basketball"} season = {"2024 - 2025"} term={"Fall"} />
        <Sport sport = {"Soccer"} season = {"2024 - 2025"} term = {"Fall"} />
        <Sport sport = {"Football"} season = {"2024 - 2025"} term = {"Fall"} />
         
    </div>
  )
}

export default page
