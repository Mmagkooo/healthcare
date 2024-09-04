import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'


function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt="Doctors"
           src="/images/doctors.jpg" 
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">We Take Care Our <span className='text-primary'>Patients Health</span></h2>

        <p className="mt-4 text-gray-800">
        &quot;At the heart of our care is a commitment to your well-being. Our dedicated team of
              professionals works tirelessly to ensure that every patient receives personalized attention
              and the highest standard of medical care. Trust us to be your partner in health, providing
              the compassionate support you need at every step of your journey.&quot;
        </p>

        <Button className="mt-10">Explore Now</Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero