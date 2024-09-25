// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { motion } from "framer-motion";
// import { AllDoctors } from "../../_components/Doctorlist";

// const DoctorDetail = () => {
//   const searchParams = useSearchParams();
//   const [doctors, setDoctors] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const id = searchParams.get("id");

//     if (id) {
//       const foundDoctors = AllDoctors.filter((doc) => doc.id === parseInt(id));
//       if (foundDoctors.length > 0) {
//         setDoctors(foundDoctors);
//       } else {
//         setError("Doctor(s) not found");
//       }
//     } else {
//       setDoctors(AllDoctors); 
//     }
//   }, [searchParams]);

//   if (doctors.length === 0 && !error) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="flex flex-col items-center p-5 mt-10" >
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-center mb-8">
//         Doctor(s) Detail
//       </h2>
//       {error ? (
//         <p className="text-red-500 mt-4">{error}</p>
//       ) : (
//         <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 ">
//           {doctors.map((doctor) => (
//             <div key={doctor.id} className="flex flex-col md:flex-row gap-6">
              
//               <motion.div
//                 className="flex flex-col items-center md:items-start border border-gray-300 rounded-lg p-8 shadow-md w-full "
//                 initial={{ opacity: 0, x: -100 }} 
//                 animate={{ opacity: 1, x: 0 }} 
//                 transition={{ duration: 0.5 }}
//               >
//                 <Image
//                   src={doctor.image || "/placeholder-image-url.jpg"}
//                   alt={doctor.name || "Doctor Image"}
//                   className="rounded-full mb-4"
//                   width={180}
//                   height={180}
//                 />
//                 <h2 className="text-2xl font-semibold text-center md:text-left">
//                   {doctor.name}
//                 </h2>
//               </motion.div>

//               <div className="flex flex-col justify-center p-4 text-left">
//                 <p className="text-lg mb-3 font-medium">
//                   <span className="font-bold">Age:</span> {doctor.age}
//                 </p>
//                 <p className="text-lg mb-3 font-medium">
//                   <span className="font-bold">Field:</span> {doctor.field}
//                 </p>
//                 <p className="text-lg mb-3 font-medium">
//                   <span className="font-bold">Experience:</span> {doctor.experience}
//                 </p>
//                 <p className="text-lg mb-3 font-medium">
//                   <span className="font-bold">Timing:</span> {doctor.timing}
//                 </p>
//                 <p className="text-lg font-medium">
//                   <span className="font-bold">Description:</span> {doctor.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DoctorDetail;

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { motion } from "framer-motion";
// import { AllDoctors } from "../../_components/Doctorlist";

// const DoctorDetail = () => {
//   const searchParams = useSearchParams();
//   const [doctors, setDoctors] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const id = searchParams.get("id");

//     if (id) {
//       const foundDoctors = AllDoctors.filter((doc) => doc.id === parseInt(id));
//       if (foundDoctors.length > 0) {
//         setDoctors(foundDoctors);
//       } else {
//         setError("Doctor(s) not found");
//       }
//     } else {
//       setDoctors(AllDoctors);
//     }
//   }, [searchParams]);

//   if (doctors.length === 0 && !error) {
//     return <p>Loading...</p>;
//   }

//   // Assuming only the first doctor has additional info, you can adjust this as needed.
//   const additionalInfo = doctors.length > 0 ? doctors[0].info : null;

//   return (
//     <div className="flex flex-col items-center p-6 mt-10 bg-gray-50 min-h-screen">
//       <motion.h2
//         className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-gray-800"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         Doctor(s) Detail
//       </motion.h2>

//       {error ? (
//         <motion.p
//           className="text-red-500 mt-4 text-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {error}
//         </motion.p>
//       ) : (
//         <>
//           <div className="w-full max-w-10xl grid grid-cols-1 md:grid-cols-2 gap-8 ml-4 md:ml-8 lg:ml-12">
//             {doctors.map((doctor) => (
//               <motion.div
//                 key={doctor.id}
//                 className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="md:w-1/3 flex items-center justify-center bg-gray-100 p-6">
//                   <Image
//                     src={doctor.image || "/placeholder-image-url.jpg"}
//                     alt={doctor.name || "Doctor Image"}
//                     className="rounded-full object-cover"
//                     width={200}
//                     height={200}
//                   />
//                 </div>

//                 <div className="md:w-2/3 flex flex-col justify-between p-6 space-y-4 text-left">
//                   <h3 className="text-3xl font-semibold text-gray-700">
//                     {doctor.name}
//                   </h3>
//                   <p className="text-lg">
//                     <span className="font-bold text-gray-800">Age:</span> {doctor.age}
//                   </p>
//                   <p className="text-lg">
//                     <span className="font-bold text-gray-800">Field:</span> {doctor.field}
//                   </p>
//                   <p className="text-lg">
//                     <span className="font-bold text-gray-800">Experience:</span> {doctor.experience}
//                   </p>
//                   <p className="text-lg">
//                     <span className="font-bold text-gray-800">Timing:</span> {doctor.timing}
//                   </p>
//                   <p className="text-lg text-gray-600">
//                     <span className="font-bold text-gray-800">Description:</span> {doctor.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {additionalInfo && (
//             <div className="mt-8 w-full max-w-10xl p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
//               <h3 className="text-xl font-bold text-gray-700">Additional Info:</h3>
//               <p className="text-lg text-gray-600">{additionalInfo}</p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default DoctorDetail;



"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { AllDoctors } from "../../_components/Doctorlist";

const DoctorDetail = () => {
  const searchParams = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = searchParams.get("id");

    if (id) {
      const foundDoctors = AllDoctors.filter((doc) => doc.id === parseInt(id));
      if (foundDoctors.length > 0) {
        setDoctors(foundDoctors);
      } else {
        setError("Doctor(s) not found");
      }
    } else {
      setDoctors(AllDoctors);
    }
  }, [searchParams]);

  if (doctors.length === 0 && !error) {
    return <p>Loading...</p>;
  }

  const additionalInfo = doctors.length > 0 ? doctors[0].info : null;

  return (
    <div className="flex flex-col items-center p-6 mt-10 bg-gray-50 min-h-screen">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Doctor(s) Detail
      </motion.h2>

      {error ? (
        <motion.p
          className="text-red-500 mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      ) : (
        <div className="flex flex-col lg:flex-row w-full max-w-10xl gap-8">
          {/* Left side: Doctors details */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 ml-4 md:ml-8 lg:ml-12">
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:w-1/3 flex items-center justify-center bg-gray-100 p-6">
                  <Image
                    src={doctor.image || "/placeholder-image-url.jpg"}
                    alt={doctor.name || "Doctor Image"}
                    className="rounded-full object-cover"
                    width={200}
                    height={200}
                  />
                </div>

                <div className="md:w-2/3 flex flex-col justify-between p-6 space-y-4 text-left">
                  <h3 className="text-3xl font-semibold text-gray-700">
                    {doctor.name}
                  </h3>
                  <p className="text-lg">
                    <span className="font-bold text-gray-800">Age:</span> {doctor.age}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-gray-800">Field:</span> {doctor.field}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-gray-800">Experience:</span> {doctor.experience}
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-gray-800">Timing:</span> {doctor.timing}
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-bold text-gray-800">Description:</span> {doctor.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side: Additional Info */}
          {additionalInfo && (
            <motion.div
              className=" w-full lg:w-1/3 mt-8 lg:mt-0 p-10 bg-white border border-gray-200 rounded-xl    shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-700">Additional Info:</h3>
              <p className="text-lg text-gray-600">{additionalInfo}</p>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorDetail;
