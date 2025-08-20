import React from "react";
import { useLocation } from "react-router-dom";
import { CreditCard, Mail, User } from "lucide-react";

export default function PaymentPage() {
  const location = useLocation();
  const { title, price, instructor } = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-black px-6 py-12 max-w-2xl mx-auto font-sans">
      <h1 className="text-4xl font-bold text-center mb-10">Secure Enrollment</h1>

      {title ? (
        <>
          <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 mb-10">
            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
            <div className="text-gray-700 space-y-1">
              <p><strong>Instructor:</strong> {instructor}</p>
              <p><strong>Price:</strong> {price}</p>
            </div>
          </section>

          <form className="space-y-6 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-rose-300 focus:outline-none"
                  placeholder="John Doe"
                  required
                />
                <User className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-rose-300 focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
                <Mail className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Information</label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength="19"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-rose-300 focus:outline-none"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <CreditCard className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            <div className="flex gap-4">
              <input
                type="text"
                maxLength="5"
                placeholder="MM/YY"
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-300 focus:outline-none"
                required
              />
              <input
                type="text"
                maxLength="4"
                placeholder="CVC"
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-300 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-rose-700 transition duration-300"
            >
              Confirm & Enroll
            </button>
          </form>
        </>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No program selected. Please return and choose a course.
        </p>
      )}
    </div>
  );
}
