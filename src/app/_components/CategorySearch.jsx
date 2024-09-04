// src/components/CategorySearch.js
import React from 'react';
import { Button } from "@/components/ui/button";
import Input from '@/components/ui/input'; 
import { Search } from 'lucide-react';

function CategorySearch() {
  return (
    <div className='mb-10 flex flex-col items-center gap-4 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center'>
        Search <span className='text-primary'>Doctor</span>
      </h2>
      <p className='text-base sm:text-lg md:text-xl text-gray-500 text-center'>
        Search Your Doctors
      </p>
      <div className="mt-4 flex flex-col sm:flex-row w-full max-w-md sm:max-w-lg lg:max-w-xl items-center">
        <Input type="text" placeholder="Search..." className="flex-1 mb-2 sm:mb-0 sm:mr-2" />
        <Button type="button" className="flex-shrink-0">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}

export default CategorySearch;
