'use client'

import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const { data, isPending } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = data?.user;

  return (
    <header className="sticky top-0 z-50 bg-[#020617] border-b border-slate-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100">AuthPlatform</span>
        </div>

        {/* Middle Section: Navigation Links (Desktop) */}
        {/* Width fix: layout jump bondho korar jonno explicit width/height fix kora hoese */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition duration-200">Home</Link>
          <Link href="/about" className="hover:text-white transition duration-200">About</Link>
          <Link href="/services" className="hover:text-white transition duration-200">Services</Link>
          <Link href="/dashboard" className="hover:text-white transition duration-200">Dashboard</Link>
          <Link href="/contact" className="hover:text-white transition duration-200">Contact</Link>
        </nav>

        {/* Right Section: Auth Action Buttons (Desktop) */}
        {/* Fixed min-height & min-width optimization jumping atkate */}
        <div className="hidden md:flex items-center min-h-[40px] justify-end">
          {isPending ? (
            /* Layout jump bondho korar jonno exact dimension skeleton loader */
            <div className="flex items-center space-x-3 animate-pulse">
              <div className="h-4 w-28 bg-slate-800/80 rounded"></div>
              <div className="h-10 w-24 bg-slate-800 rounded-md"></div>
            </div>
          ) : user ? (
            /* Logged In State */
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 text-sm">Welcome, {user.name}</span>
              <button 
                onClick={() => signOut()} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Sign Out
              </button>
            </div>
          ) : (
            /* Logged Out State */
            <div className="flex items-center space-x-3">
              <Link 
                href="/auth/signin" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-md"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation (Small Screens) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#020617] border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white transition duration-200 py-1"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white transition duration-200 py-1"
            >
              About
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white transition duration-200 py-1"
            >
              Services
            </Link>
            <Link 
              href="/dashboard" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white transition duration-200 py-1"
            >
              Dashboard
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-white transition duration-200 py-1"
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-800">
            {isPending ? (
              <div className="h-9 bg-slate-800 rounded animate-pulse w-full"></div>
            ) : user ? (
              <div className="flex flex-col space-y-3">
                <span className="text-slate-300 text-sm">Welcome, {user.name}</span>
                <button 
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }} 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200 text-center"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/auth/signin" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200 text-center"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/signup" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200 text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}