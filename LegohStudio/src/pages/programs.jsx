import React, { useState } from "react";
import { Music, Mic, Theater, Guitar, Piano, Users, Clock, Award, Star, ChevronDown, ChevronUp, Calendar, DollarSign } from "lucide-react";

export default function ExplorePrograms() {
  const [expandedProgram, setExpandedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Piano Mastery",
      icon: <Piano className="w-8 h-8" />,
      color: "rose",
      description: "Master the keys with our comprehensive piano program, from classical foundations to contemporary styles.",
      ages: "Ages 5-18",
      levels: "Beginner to Advanced",
      duration: "30-60 min lessons",
      price: "$80-120/lesson",
      features: [
        "Individual and group lessons",
        "Classical and contemporary repertoire",
        "Music theory integration",
        "Recital performances",
        "Competition preparation",
        "Sight-reading skills"
      ],
      schedule: "Mon-Sat, flexible scheduling",
      instructor: "Emily Hall & Marcus Johnson"
    },
    {
      id: 2,
      title: "Vocal Excellence",
      icon: <Mic className="w-8 h-8" />,
      color: "blue",
      description: "Develop your unique voice with professional coaching in technique, performance, and stage presence.",
      ages: "Ages 8+",
      levels: "All levels welcome",
      duration: "45-60 min lessons",
      price: "$90-130/lesson",
      features: [
        "Breath control and technique",
        "Performance coaching",
        "Song interpretation",
        "Recording opportunities",
        "Solo and ensemble work",
        "Audition preparation"
      ],
      schedule: "Tue-Sun, evening slots available",
      instructor: "Marcus Johnson & Sarah Liu"
    },
    {
      id: 3,
      title: "Musical Theater",
      icon: <Theater className="w-8 h-8" />,
      color: "purple",
      description: "Triple threat training combining singing, dancing, and acting for complete musical theater performance.",
      ages: "Ages 10+",
      levels: "Intermediate to Advanced",
      duration: "90 min classes",
      price: "$150/class",
      features: [
        "Full production participation",
        "Character development",
        "Stage choreography",
        "Script analysis",
        "Costume and makeup workshops",
        "Professional showcase opportunities"
      ],
      schedule: "Wed & Sat afternoons",
      instructor: "Full Faculty Team"
    },
    {
      id: 4,
      title: "Guitar & Strings",
      icon: <Guitar className="w-8 h-8" />,
      color: "green",
      description: "Acoustic and electric guitar instruction covering multiple genres from folk to rock to classical.",
      ages: "Ages 7+",
      levels: "Beginner to Advanced",
      duration: "30-45 min lessons",
      price: "$75-110/lesson",
      features: [
        "Acoustic and electric guitar",
        "Multiple music styles",
        "Chord progressions and scales",
        "Song writing basics",
        "Ensemble playing",
        "Recording techniques"
      ],
      schedule: "Mon-Fri, after school slots",
      instructor: "David Chen"
    },
    {
      id: 5,
      title: "Rhythm & Percussion",

      color: "orange",
      description: "Master rhythm with drum set lessons, percussion ensemble, and rhythm theory fundamentals.",
      ages: "Ages 6+",
      levels: "All levels",
      duration: "45 min lessons",
      price: "$85-115/lesson",
      features: [
        "Drum set fundamentals",
        "Percussion ensemble",
        "Rhythm theory",
        "Different music styles",
        "Recording and production",
        "Live performance training"
      ],
      schedule: "Tue-Thu, soundproof studios",
      instructor: "Alex Rodriguez"
    },
    {
      id: 6,
      title: "Dance & Movement",
      icon: <Users className="w-8 h-8" />,
      color: "pink",
      description: "Express yourself through movement with ballet, jazz, contemporary, and hip-hop dance styles.",
      ages: "Ages 4+",
      levels: "Beginner to Pre-Professional",
      duration: "60-90 min classes",
      price: "$25-40/class",
      features: [
        "Multiple dance styles",
        "Flexibility and strength training",
        "Choreography creation",
        "Performance opportunities",
        "Competition teams",
        "Master classes with guest artists"
      ],
      schedule: "Daily classes, age-grouped",
      instructor: "Sarah Liu & Guest Artists"
    }
  ];

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      rose: type === 'bg' ? 'bg-rose-500' : type === 'text' ? 'text-rose-600' : type === 'border' ? 'border-rose-200' : 'from-rose-100 to-rose-200',
      blue: type === 'bg' ? 'bg-blue-500' : type === 'text' ? 'text-blue-600' : type === 'border' ? 'border-blue-200' : 'from-blue-100 to-blue-200',
      purple: type === 'bg' ? 'bg-purple-500' : type === 'text' ? 'text-purple-600' : type === 'border' ? 'border-purple-200' : 'from-purple-100 to-purple-200',
      green: type === 'bg' ? 'bg-green-500' : type === 'text' ? 'text-green-600' : type === 'border' ? 'border-green-200' : 'from-green-100 to-green-200',
      orange: type === 'bg' ? 'bg-orange-500' : type === 'text' ? 'text-orange-600' : type === 'border' ? 'border-orange-200' : 'from-orange-100 to-orange-200',
      pink: type === 'bg' ? 'bg-pink-500' : type === 'text' ? 'text-pink-600' : type === 'border' ? 'border-pink-200' : 'from-pink-100 to-pink-200'
    };
    return colorMap[color] || colorMap.rose;
  };

  return (
    <div className="bg-white text-black min-h-screen font-serif">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-rose-600 via-red-500 to-orange-400 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Explore Our Programs</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the perfect program to unleash your artistic potential at Le'Goh Studio
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-rose-50 rounded-xl p-6">
            <Music className="w-8 h-8 text-rose-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-rose-600">6</div>
            <div className="text-sm text-gray-600">Core Programs</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">200+</div>
            <div className="text-sm text-gray-600">Active Students</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">50+</div>
            <div className="text-sm text-gray-600">Performances/Year</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">15+</div>
            <div className="text-sm text-gray-600">Expert Instructors</div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`bg-gradient-to-r ${getColorClasses(program.color, 'gradient')} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`${getColorClasses(program.color, 'bg')} text-white p-4 rounded-2xl`}>
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">{program.title}</h3>
                      <p className="text-gray-700 text-lg">{program.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                    className={`${getColorClasses(program.color, 'bg')} text-white p-2 rounded-full hover:scale-110 transition-transform`}
                  >
                    {expandedProgram === program.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className={`w-5 h-5 ${getColorClasses(program.color, 'text')}`} />
                    <span className="text-gray-700 font-medium">{program.ages}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className={`w-5 h-5 ${getColorClasses(program.color, 'text')}`} />
                    <span className="text-gray-700 font-medium">{program.levels}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-5 h-5 ${getColorClasses(program.color, 'text')}`} />
                    <span className="text-gray-700 font-medium">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className={`w-5 h-5 ${getColorClasses(program.color, 'text')}`} />
                    <span className="text-gray-700 font-medium">{program.price}</span>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProgram === program.id && (
                  <div className="border-t border-white/30 pt-6 animate-in slide-in-from-top-4 duration-300">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4">What You'll Learn</h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Star className={`w-4 h-4 ${getColorClasses(program.color, 'text')}`} />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Schedule</h4>
                            <div className="flex items-center gap-2">
                              <Calendar className={`w-5 h-5 ${getColorClasses(program.color, 'text')}`} />
                              <span className="text-gray-700">{program.schedule}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Instructor</h4>
                            <span className="text-gray-700">{program.instructor}</span>
                          </div>
                          <button className={`${getColorClasses(program.color, 'bg')} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity`}>
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of students who have discovered their passion at Le'Goh Studio
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors">
              Schedule a Trial Lesson
            </button>
            <button className="border-2 border-rose-600 hover:bg-rose-600 hover:text-white text-rose-600 px-8 py-4 text-lg font-semibold rounded-xl transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-6 mb-4">
            <a href="https://www.instagram.com/legohstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">
              Instagram
            </a>
            <span className="text-gray-400">|</span>
            <a href="https://www.facebook.com/legohstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">
              Facebook
            </a>
          </div>
          <p className="text-gray-400">© 2025 Le'Goh Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}