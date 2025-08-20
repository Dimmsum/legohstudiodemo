import React, { useState } from "react";
import { Sparkles, Music, Mic, Theater, X, Mail } from "lucide-react";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="pt-16 pb-28 bg-white text-black min-h-screen flex flex-col font-serif relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/dance-studio.jpg')`,
          height: "100vh",
          zIndex: 0,
        }}
      />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
              aria-label="Close contact form"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-rose-600 mb-6">Contact Us</h2>

            <div className="mb-6 space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">Emily Hall, Director</p>
                <a href="tel:6319227121" className="text-rose-600 hover:underline">
                  631-922-7121
                </a>
              </div>
              <div>
                <p className="font-semibold">Eisha Hall, Consultant</p>
                <a href="tel:5168512352" className="text-rose-600 hover:underline">
                  516-851-2352
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-rose-600" />
                <a
                  href="mailto:info@legohstudio.com"
                  className="text-rose-600 hover:underline"
                >
                  info@legohstudio.com
                </a>
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <button
                type="submit"
                className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              <span className="text-white">Welcome to</span>
              <br />
              <span className="bg-gradient-to-r from-rose-600 via-red-500 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
                Le'Goh Studio
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 font-light italic leading-relaxed">
              A sanctuary for budding artists—where passion meets purpose through
              music, movement, and stagecraft.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 text-lg font-semibold rounded-xl transition duration-300 transform hover:-translate-y-1 shadow-md">
                Explore Programs
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-rose-600 hover:bg-rose-600 hover:text-white text-rose-600 px-6 py-3 text-lg font-semibold rounded-xl transition duration-300 transform hover:-translate-y-1 shadow-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-rose-50 to-orange-50 rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-rose-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Active Students</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-rose-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Expert Instructors</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-rose-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Programs Offered</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-rose-600 mb-2">10</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Featured Programs */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-rose-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Music className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-3">Piano Mastery</h3>
              <p className="text-rose-700 mb-4">From classical foundations to contemporary styles. Individual and group lessons available.</p>
              <div className="text-sm text-rose-600">
                <div>• Ages 5-18</div>
                <div>• Beginner to Advanced</div>
                <div>• Recitals & Competitions</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-rose-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Theater className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-3">Musical Theater</h3>
              <p className="text-rose-700 mb-4">Combine singing, dancing, and acting in our comprehensive musical theater program.</p>
              <div className="text-sm text-rose-600">
                <div>• Full Productions</div>
                <div>• Script Writing</div>
                <div>• Stage Presence</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-rose-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Mic className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-3">Vocal Excellence</h3>
              <p className="text-rose-700 mb-4">Develop your unique voice with professional vocal coaching and performance techniques.</p>
              <div className="text-sm text-rose-600">
                <div>• Solo & Ensemble</div>
                <div>• Recording Sessions</div>
                <div>• Performance Opportunities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructor Spotlight */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Meet Our Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">EH</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emily Hall</h3>
              <p className="text-rose-600 font-semibold mb-2">Studio Director</p>
              <p className="text-gray-600 text-sm">15+ years in performing arts education with a Master's in Music Performance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Marcus Johnson</h3>
              <p className="text-rose-600 font-semibold mb-2">Voice & Piano Instructor</p>
              <p className="text-gray-600 text-sm">Broadway veteran with performances in major productions across the country.</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SL</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sarah Liu</h3>
              <p className="text-rose-600 font-semibold mb-2">Dance & Movement</p>
              <p className="text-gray-600 text-sm">Former principal dancer with extensive choreography and teaching experience.</p>
            </div>
          </div>
        </div>


        
      </div>

      <footer className="text-center py-8 text-sm text-gray-600">
        <div className="flex justify-center items-center gap-4 mb-2">
          <a href="https://www.instagram.com/legohstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600">Instagram</a>
          <span className="text-gray-400">|</span>
          <a href="https://www.facebook.com/legohstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600">Facebook</a>
        </div>
        © 2025 Le'Goh Studio. All rights reserved.
      </footer>
    </section>
  );
}