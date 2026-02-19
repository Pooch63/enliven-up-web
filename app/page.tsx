'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Music, Heart, MapPin, Menu, X } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Enliven
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#mission" className="text-gray-700 hover:text-violet-600 transition">
              Mission
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-violet-600 transition">
              About
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-violet-600 transition">
              Team
            </Link>
            <Link href="#partnerships" className="text-gray-700 hover:text-violet-600 transition">
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
              <Link href="#mission" className="text-gray-700 hover:text-violet-600 transition">
                Mission
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-violet-600 transition">
                About
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-violet-600 transition">
                Team
              </Link>
              <Link href="#partnerships" className="text-gray-700 hover:text-violet-600 transition">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Inspiring Inter-Generational Connections
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bringing youth and elders together through meaningful performances and shared experiences that foster lasting relationships.
              </p>
              <div className="flex gap-4">
                <button className="bg-violet-600 text-white px-8 py-3 rounded-full hover:bg-violet-700 transition flex items-center gap-2 font-semibold">
                  Join Us <ArrowRight size={20} />
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.jpg"
                alt="Intergenerational performance"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl italic mb-6 leading-relaxed">
            "What a remarkable initiative you've built! I love that you are focusing on intergenerational connections. What really makes a difference in whether or not we find fulfillment are the moments we spend loving people and serving others."
          </p>
          <div>
            <p className="font-semibold text-lg">Dr. Vivek Murthy</p>
            <p className="text-gray-400">Surgeon General, United States</p>
            <p className="text-gray-500 text-sm">December 2024</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-violet-50 rounded-2xl">
              <Music className="w-12 h-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Joyful Performances</h3>
              <p className="text-gray-700">
                Youth share their musical talents and cultural perspectives to entertain and uplift senior audiences.
              </p>
            </div>
            <div className="p-8 bg-pink-50 rounded-2xl">
              <Heart className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Meaningful Exchange</h3>
              <p className="text-gray-700">
                Elders share their love, wisdom, and support, creating special bonds and lasting memories for all.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vibrant Community</h3>
              <p className="text-gray-700">
                Intergenerational connections foster a stronger, more connected community where everyone thrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Enliven</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Enliven, we are dedicated to bridging the gap between elders and youth through meaningful exchange. We create concerts and performances (both small and large) to engage seniors of all abilities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This exchange offers an enriching experience for both elders and youth, helping create special bonds and memories that enrich everyone involved. We believe that the strongest communities are built on genuine human connection across generations.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-violet-600 hover:shadow-lg transition">
              <MapPin className="w-8 h-8 text-violet-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sunrise Senior Living</h3>
              <p className="text-gray-600">Newton</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-violet-600 hover:shadow-lg transition">
              <MapPin className="w-8 h-8 text-violet-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fox Hill Village</h3>
              <p className="text-gray-600">Westwood</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-violet-600 hover:shadow-lg transition">
              <MapPin className="w-8 h-8 text-violet-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">North Hill Senior Living</h3>
              <p className="text-gray-600">Needham</p>
            </div>
          </div>
          <p className="text-center text-gray-600 text-lg">
            In the Greater Boston area? <a href="mailto:info@enlivenup.org" className="text-violet-600 font-semibold hover:underline">Contact us to bring a program to your facility</a>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-violet-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a student wanting to volunteer, an organization looking to partner, or someone passionate about intergenerational connections—we'd love to have you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-600 px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold">
              Volunteer
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition font-semibold">
              Partner With Us
            </button>
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
              <li><a href="#" className="hover:text-white transition">Performers</a></li>
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
