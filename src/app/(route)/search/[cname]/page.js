"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';


function DocCategoryList() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);
  const params = usePathname();
  console.log(params);
  
  const paramsCate = params.split('/')[2] || ""; 
  console.log(paramsCate);
  

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/Doctors.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        setError('Failed to load doctors.');
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doctor) => doctor.field.toLowerCase() === paramsCate.toLowerCase());


  if (filteredDoctors.length === 0) {
    return <p>No doctors found for the category: {paramsCate}</p>;
  }


  return (
    <div className="px-3 pb-5 mt-5 flex flex-col">
      <h1 className="text-xl font-bold mb-4">Doctor Profiles in {paramsCate}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor, index) => (
          <Link key={doctor.id} href={``} passHref>
            <div className="border border-gray-300 rounded-lg p-5 w-full max-w-xs text-center shadow-md transition-transform transform hover:scale-105 mt-5">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={144}
                height={144}
                className="w-36 h-36 rounded-full mx-auto"
              />
              <h2 className="text-xl mt-5 mb-2">{doctor.name}</h2>
              <p>Age: {doctor.age}</p>
              <p>Field: {doctor.field}</p>
              <p>Experience: {doctor.experience}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DocCategoryList;
