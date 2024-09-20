'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const DoctorDetails = () => {
  const { docId } = useParams(); // Fetch docId from the URL
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch('/Doctors.json');
        if (!response.ok) {
          throw new Error('Failed to fetch doctor details.');
        }
        const data = await response.json();
        const foundDoctor = data.find((doc) => doc.id === docId);
        if (foundDoctor) {
          setDoctor(foundDoctor);
        } else {
          setError('Doctor not found.');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDoctorDetails();
  }, [docId]);

  if (error) return <p>{error}</p>;
  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="p-5 mt-10">
      <h1 className="text-3xl font-bold mb-5">{doctor.name}</h1>
      <Image
        width={144}
        height={144}
        src={doctor.image || 'placeholder-image-url'}
        alt={doctor.name || 'Doctor Image'}
        className="rounded-full"
      />
      <p>Age: {doctor.age}</p>
      <p>Field: {doctor.field}</p>
      <p>Experience: {doctor.experience}</p>
    </div>
  );
};

export default DoctorDetails;
