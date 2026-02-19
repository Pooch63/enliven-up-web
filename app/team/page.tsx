'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, ArrowLeft, Menu, X } from 'lucide-react';

interface TeamMember {
  name: string;
}

const teamMembers: TeamMember[] = [
  { name: "Vishwa" },
  { name: "Saanvi" },
  { name: "Aria" },
  { name: "Reeya" }
];

export default function TeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Enliven
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/#mission" className="text-gray-700 hover:text-violet-600 transition">
              Mission
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-violet-600 transition">
              About
            </Link>
            <Link href="/team" className="text-violet-600 font-semibold">
              Team
            </Link>
            <Link href="/#partnerships" className="text-gray-700 hover:text-violet-600 transition">
              Partners
            </Link>
            <button className="bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700 transition">
              Get Involved
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-4 px-6 py-4">
              <Link href="/#mission" className="text-gray-700 hover:text-violet-600 transition">
                Mission
              </Link>
              <Link href="/#about" className="text-gray-700 hover:text-violet-600 transition">
                About
              </Link>
              <Link href="/team" className="text-violet-600 font-semibold">
                Team
              </Link>
              <Link href="/#partnerships" className="text-gray-700 hover:text-violet-600 transition">
                Partners
              </Link>
              <button className="bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-700 transition w-full">
                Get Involved
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-violet-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/" className="p-2 hover:bg-gray-200 rounded-full transition">
              <ArrowLeft size={24} className="text-gray-700" />
            </Link>
            <h1 className="text-5xl font-bold text-gray-900">Our Team</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Meet the passionate individuals dedicated to bringing meaningful intergenerational connections to our community.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl p-8 border border-violet-200 hover:shadow-lg transition text-center"
              >
                <div className="w-full h-48 bg-gradient-to-br from-violet-400 to-pink-400 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
            <p className="text-lg text-gray-700 mb-6">
              We are always looking for passionate individuals who want to make a difference in our community. Whether you are interested in volunteering, partnering with us, or exploring career opportunities, we would love to hear from you.
            </p>
            <a
              href="mailto:info@enlivenup.org"
              className="inline-block bg-violet-600 text-white px-8 py-3 rounded-full hover:bg-violet-700 transition font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Enliven
            </h3>
            <p className="text-gray-400">Inspiring intergenerational connections</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="mailto:info@enlivenup.org" className="hover:text-white transition">Volunteer</a></li>
              <li><a href="mailto:info@enlivenup.org" className="hover:text-white transition">Partner</a></li>
              <li><a href="mailto:info@enlivenup.org" className="hover:text-white transition">Performers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              <a href="mailto:info@enlivenup.org" className="hover:text-white transition">
                info@enlivenup.org
              </a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Enliven Up. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
