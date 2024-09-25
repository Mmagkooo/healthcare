"use client"
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import DoctorList, { AllDoctors } from '../_components/Doctorlist';

const firebaseConfig = {
  apiKey: "AIzaSyBDw5y5iXQvEY2KMql78CoEHizslbwQ9h8",
  authDomain: "doctor-app-12a47.firebaseapp.com",
  projectId: "doctor-app-12a47",
  storageBucket: "doctor-app-12a47.appspot.com",
  messagingSenderId: "322452332166",
  appId: "1:322452332166:web:4d3455507bf7b54deffb07",
  measurementId: "G-QP9S9GSSRG"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DoctorAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add the appointment to Firestore
      await addDoc(collection(db, "appointments"), formData);
      console.log("Appointment booked successfully:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding appointment:", error);
      setErrorMessage("Failed to book the appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Doctor Appointment</h2>
        
        {isSubmitted ? (
          <div className="text-green-600 font-medium text-center">Appointment booked successfully!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Doctor Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Doctor</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                required
              >
                <option value="" disabled>Select Doctor</option>
                {AllDoctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name} - {doctor.timing}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-200"
              >
                Book Appointment
              </button>
            </div>

            {errorMessage && (
              <div className="text-red-600 text-center mt-4">{errorMessage}</div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointment;
