"use client";

import React, { useState, useEffect } from 'react';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/Doctors.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setDoctors(data))
      .catch((error) => {
        console.error('Error fetching the doctors:', error);
        setError('Failed to load doctors.');
      });
  }, []);

  return (
    <div className="flex flex-col items-center p-5 mt-10">
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center mb-8'>
        Doctor <span className='text-primary'>Lists</span>
      </h2>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="flex flex-wrap gap-5 justify-center mt-8">
        {doctors.length === 0 && !error ? (
          <p>Loading...</p>
        ) : (
          doctors.map((doctor, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-5 w-full max-w-xs text-center shadow-md transition-transform transform hover:scale-105 mt-5"
            >
              <img
                src={doctor.image || 'placeholder-image-url'} // Use a placeholder if image is missing
                alt={doctor.name}
                className="w-36 h-36 rounded-full mx-auto"
              />
              <h2 className="text-xl mt-5 mb-2">{doctor.name}</h2>
              <p>Age: {doctor.age}</p>
              <p>Field: {doctor.field}</p>
              <p>Experience: {doctor.experience}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorList;
