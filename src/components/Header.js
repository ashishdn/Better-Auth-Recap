'use client'

import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

export default function Header() {
     const { data, isPending } = useSession();
  if(isPending){
    return <div>Loading...</div>
  }

  const user = data?.user
  return (
    <header className="sticky top-0 z-50 bg-[#020617] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100">AuthPlatform</span>
        </div>

        {/* Middle Section: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition duration-200">Home</Link>
          <Link href="/about" className="hover:text-white transition duration-200">About</Link>
          <Link href="/services" className="hover:text-white transition duration-200">Services</Link>
          <Link href="/dashboard" className="hover:text-white transition duration-200">Dashboard</Link>
          <Link href="/contact" className="hover:text-white transition duration-200">Contact</Link>
        </nav>

        {/* Right Section: Empty Div for Your Custom Work */}
        <div className="flex items-center">
          {user ? (
            <>
            <div className="flex items-center space-x-3">
              <span className="text-slate-300">Welcome, {user.name}</span>
            </div>
            <button onClick={() => signOut()} className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-200">
              Sign Out
            </button>
            </>
          ) : (
            <>
            <button className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-200">
              <Link href="auth/signin">Sign In</Link>
            </button>
            <button className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-200">
              <Link href="auth/signup">Sign Up</Link>
            </button>
            </>
          )}
        </div>

      </div>
    </header>
  );
}