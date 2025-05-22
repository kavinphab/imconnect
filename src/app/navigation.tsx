'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navigation() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">IMConnect</Link>
        <div className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/register">Register</Link>
          

          {status === 'loading' ? (
            <span className="text-gray-500">Loading...</span>
          ) : session ? (
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link href="/signin">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
