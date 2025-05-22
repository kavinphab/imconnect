'use client';

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center space-y-6">
        <h1 className="text-2xl font-bold">Welcome to IMConnect</h1>
        <p className="text-gray-600">Sign in with your Google account</p>

        <div className="space-y-3">
          <button
            onClick={() => signIn('google')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
}
