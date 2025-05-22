import Image from 'next/image';
import { useEffect, useState } from 'react';
import SRC from "@/app/public/home_src.jpg" 

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className={`transition-transform duration-700 ${scrolled ? '-translate-y-52' : 'translate-y-0'}`}>
        <div className="relative w-full h-screen">
        <Image src = {SRC} alt='SRC Picture' className='w-full h-screen '/>

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl font-bold drop-shadow-lg">IMConnect</h1>
            <p className="text-white text-xl mt-4 drop-shadow-md">Your Campus Sports. Simplified.</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-20 px-6">
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Future of Intramural Sports</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            IMConnect is a FREE and intuitive intramural sports management platform that empowers students and staff to
            register teams, join leagues, and communicate effortlessly.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Effortless Registration</h3>
            <p className="text-gray-600">Sign up with a few clicks. Join leagues, register as a team or free agent, and youre ready to play.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Streamlined Communication</h3>
            <p className="text-gray-600">Chat with teammates, get real-time updates, and receive match notifications—all in one place.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-gray-600">Automatically see your upcoming games and availability with our smart calendar system.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
