import React from "react";

const events = [
  {
    id: 1,
    title: "Lo-fi Beat Workshop",
    description: "Learn the basics of lo-fi music production with our in-house producer.",
    date: "2025-06-10T17:00:00",
    location: "Studio A, Le'Goh Center",
  },
  {
    id: 2,
    title: "Portfolio Review Night",
    description: "Bring your work and get feedback from local artists and instructors.",
    date: "2025-06-15T18:30:00",
    location: "Art Hall, Le'Goh Studio",
  },
  {
    id: 3,
    title: "Youth Music Showcase",
    description: "A live showcase of student performances from our current music programs.",
    date: "2025-06-22T16:00:00",
    location: "Main Auditorium",
  },
];

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-serif px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-rose-700">Upcoming Events</h1>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-2">{event.description}</p>
            <div className="text-sm text-gray-700">
              <p><strong>Date:</strong> {formatDate(event.date)}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
