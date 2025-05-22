
export default function HomePage() {
  

  return (
   

        <div className="max-w-2xl mx-auto pt-8">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Register a Team</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">Team Name</label>
                <input type="text" placeholder="Enter your team name" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input type="text" placeholder="Enter your name" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input type="email" placeholder="Enter email" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone number</label>
                <input type="email" placeholder="Enter number" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block mb-1 font-medium">T-shirt Size</label>
                <input type="email" placeholder="Shirt Size" className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              
         
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register Team
              </button>
            </form>
          </div>
        </div>

  );
}
