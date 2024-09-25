"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Input from '@/components/ui/input';
import { Search } from 'lucide-react';
import { AllDoctors } from './Doctorlist';
import Image from 'next/image';
import Link from 'next/link';

function CategorySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);


    if (query) {
      const filteredSuggestions = AllDoctors.filter(doctor =>
        doctor.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
      setShowResults(false);
    }
  };

  const handleSearch = () => {
    setShowResults(true);
    setSuggestions([]);
  };

  return (
    <div className='mb-10 flex flex-col items-center gap-4 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center'>
        Search <span className='text-primary'>Doctor</span>
      </h2>
      <p className='text-base sm:text-lg md:text-xl text-gray-500 text-center'>
        Search Your Doctors
      </p>
      <div className="mt-4 flex flex-col sm:flex-row w-full max-w-md sm:max-w-lg lg:max-w-xl items-center">
        <Input
          type="text"
          placeholder="Search..."
          className="flex-1 mb-2 sm:mb-0 sm:mr-2"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button type="button" className="flex-shrink-0" onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>

      {searchQuery && suggestions.length > 0 && (
        <ul className="mt-2 w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white border border-gray-300 rounded-md shadow-lg">
          {suggestions.map(doctor => (
            <li
              key={doctor.id}
              className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                setSearchQuery(doctor.name);
                setSuggestions([]);
              }}
            >
              {doctor.name}
            </li>
          ))}
        </ul>
      )}

      {showResults && searchQuery && (
        <div className="mt-4 w-full">
          {AllDoctors.filter(doctor =>
            doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
          ).length > 0 ? (
            <ul>
              {AllDoctors.filter(doctor =>
                doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
              ).map(doctor => (
                <li key={doctor.id} className="py-2 border-b">
                  <div className="border border-gray-300 rounded-lg p-5 w-full max-w-xs text-center shadow-md">
                    <Image
                      src={doctor.image || '/placeholder-image-url.jpg'}
                      alt={doctor.name || 'Doctor Image'}
                      className="rounded-full mx-auto"
                      width={160}
                      height={160}
                      priority
                    />
                    <h2 className="text-xl mt-5 mb-2">{doctor.name}</h2>
                    <p>Age: {doctor.age}</p>
                    <p>Field: {doctor.field}</p>
                    <p>Experience: {doctor.experience}</p>
                    <Link href={`/Doctor?id=${doctor.id}`}>
                      <button className="mt-4 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md">
                        Go to Doctor Deatail
                      </button>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">No doctors found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CategorySearch;





