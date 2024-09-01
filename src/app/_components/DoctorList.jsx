import React from 'react'
import Image from 'next/image'

function DoctorList() {
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl' >Popular Doctors</h2>
      <div className='grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3
        gap-7 mt-4lg:grid-cols-4'>
 {/* {doctorList.length>0?doctorList.map((doctor,index)=>( ---- for Api call*/}
                <div className='border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out'
                key={index}>
                    <Image src={doctor.attributes?.image?.data?.attributes?.url}
                    alt='doctor'
                    width={500}
                    height={200}
                    className='h-[200px] w-full object-cover rounded-lg'/>
                </div>
         

</div>
</div>
)
}


export default DoctorList
