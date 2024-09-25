"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AllDoctors = [
  {
            "id" : 1 ,
            "image": "https://expathealthservices.com/wp-content/uploads/2021/07/house-call.png",
            "name": "Dr. John Doe",
            "age": 45,
            "field": "Cardiology",
            "experience": "20 years",
            "description": "Dr. John Doe is a highly experienced cardiologist who specializes in treating heart diseases and promoting cardiovascular health.",
            "timing": "Monday to Friday, 9 AM - 5 PM",
            "info" : "Dr. John Doe is a highly experienced and respected cardiologist who has dedicated his career to advancing the treatment of cardiovascular diseases. With over two decades of hands-on experience, Dr. Doe specializes in both preventive cardiology and complex procedures such as angioplasty, stenting, and bypass surgery. He is known for his patient-centric approach, ensuring that each patient receives personalized care based on their unique health needs. Dr. Doe is also actively involved in cardiovascular research and has contributed to numerous publications in top medical journals, making him a leader in his field.",
  
          },
          {
            "id" : 2 ,
            "image": "https://www.trdoktor.com/file/2017/08/65248471735.jpg",
            "name": "Dr. Jane Smith",
            "age": 39,
            "field": "Neurology",
            "experience": "15 years",
            "description": "Dr. Jane Smith is an expert in neurology, focusing on disorders of the nervous system and providing specialized treatment plans.",
            "timing": "Monday to Friday, 10 AM - 4 PM", 
            "info": "Dr. Jane Smith is a leading neurologist who has been practicing for 15 years, with a focus on treating neurological disorders such as epilepsy, stroke, multiple sclerosis, and Parkinson’s disease. She is renowned for her diagnostic acumen and her ability to develop effective, tailored treatment plans for her patients. Dr. Smith’s work in neuroimaging and brain mapping has greatly enhanced her ability to pinpoint issues in the nervous system. Her contributions to the study of neurodegenerative diseases have earned her accolades in both academic and clinical settings. In addition to her clinical work, she is a strong advocate for patient education and regularly conducts seminars on brain health.",
    
          },
          {
            "id" : 3,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AsV4bbwltT2ECV_t7JZ7Fjf3P9xdp7zfEg&s",
            "name": "Dr. Emily Johnson",
            "age": 50,
            "field": "Orthopedics",
            "experience": "25 years",
            "description": "Dr. Emily Johnson is a skilled orthopedic surgeon with a focus on joint replacement and sports-related injuries.",
            "timing": "Tuesday to Saturday, 11 AM - 6 PM",

            "info": "Dr. Michael Brown is a dedicated pediatrician with 14 years of experience in treating children, from newborns to adolescents. His expertise spans a wide range of childhood illnesses, including respiratory infections, developmental disorders, and childhood obesity. Dr. Brown is known for his gentle and empathetic approach, which puts both parents and children at ease. He strongly believes in the importance of early diagnosis and preventive care, often working with families to promote healthy lifestyles from a young age. Additionally, Dr. Brown is actively involved in pediatric research, contributing to the development of vaccines and new treatment methods for childhood diseases.",
 
          },
          {
            "id" : 4 ,
            "image": "https://evb9ktagfkv.exactdn.com/wp-content/uploads/2017/06/doctor-phone.png?strip=all&lossy=1&ssl=1",
            "name": "Dr. Michael Brown",
            "age": 38,
            "field": "Pediatrics",
            "experience": "14 years",
            "description": "Dr. Michael Brown specializes in children's health, offering top-notch care for infants, children, and adolescents.",
            "timing": "Monday to Friday, 9 AM - 3 PM",
            "info": "Dr. Sarah Davis is a board-certified dermatologist with nearly two decades of experience in the diagnosis and treatment of skin diseases. Her areas of expertise include psoriasis, eczema, acne, and skin cancer. Dr. Davis is also highly regarded for her work in cosmetic dermatology, offering treatments such as laser therapy, chemical peels, and injectables like Botox and fillers. She stays at the forefront of advancements in dermatological treatments and has introduced cutting-edge procedures that yield excellent cosmetic results with minimal downtime. Dr. Davis’s compassionate care and commitment to patient satisfaction have earned her a loyal following of patients.",
    
          },
          {
            "id":5,
            "image": "https://www.shutterstock.com/image-photo/beautiful-smiling-female-doctor-happy-260nw-1390534574.jpg",
            "name": "Dr. Sarah Davis",
            "age": 43,
            "field": "Dermatology",
            "experience": "18 years",
            "description": "Dr. Sarah Davis is a renowned dermatologist specializing in skin disorders and cosmetic dermatology treatments.",
            "timing": "Monday to Thursday, 10 AM - 5 PM",
            "info": "Dr. William Wilson is a highly skilled gastroenterologist with a comprehensive understanding of digestive diseases, including inflammatory bowel disease (IBD), irritable bowel syndrome (IBS), and liver conditions. Over the last 22 years, Dr. Wilson has performed countless endoscopic procedures, such as colonoscopies and upper GI endoscopies, helping to diagnose and treat various gastrointestinal conditions. His practice focuses on the latest advancements in minimally invasive techniques, which allow for more accurate diagnosis and treatment with less discomfort for the patient. Dr. Wilson is deeply committed to patient education, helping individuals understand the importance of digestive health and offering practical solutions for managing chronic conditions.",
   
          },
            {
              "id": 6,
              "image": "https://www.duzeygoz.com.tr/wp-content/uploads/2024/04/Sahan-hoca-450-1.png",
              "name": "Dr. William Wilson",
              "age": 47,
              "field": "Gastroenterology",
              "experience": "22 years",
              "description": "Dr. William Wilson is a leading expert in gastroenterology, treating conditions related to the digestive system.",
              "timing": "Monday to Friday, 8 AM - 2 PM",
              "info": "Dr. Wilson completed his medical degree at Harvard Medical School and has authored multiple research papers on gastrointestinal diseases. He is known for his patient-centered approach, emphasizing thorough diagnostic testing and personalized treatment plans."
            },
            {
              "id": 7,
              "image": "https://www.duzeygoz.com.tr/wp-content/uploads/2024/04/atilla-hoca-450-1.png",
              "name": "Dr. Jessica Martinez",
              "age": 36,
              "field": "Oncology",
              "experience": "12 years",
              "description": "Dr. Jessica Martinez provides compassionate oncology care, focusing on cancer treatment and patient support.",
              "timing": "Monday to Wednesday, 9 AM - 3 PM",
              "info": "Dr. Martinez graduated from Stanford University with honors. She specializes in chemotherapy and radiotherapy, working closely with patients to manage side effects and improve their quality of life during treatment. Her dedication to patient advocacy is widely recognized in the oncology community."
            },
            {
              "id": 8,
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fW3-aTc9ba25uvJ4Ab1CNhBSW4hMZURBE_83bVxNP_LczAVyoNE3P78edydOKK2cckI&usqp=CAU",
              "name": "Dr. David Lee",
              "age": 44,
              "field": "Radiology",
              "experience": "19 years",
              "description": "Dr. David Lee is a skilled radiologist specializing in diagnostic imaging techniques to aid in treatment planning.",
              "timing": "Monday to Friday, 9 AM - 6 PM",
              "info": "Dr. Lee obtained his medical degree from Johns Hopkins University and has extensive experience in MRI and CT imaging. He is an active participant in numerous radiology conferences, presenting his findings on advancements in imaging technology."
            },
            {
              "id": 9,
              "image": "https://www.trdoktor.com/file/2017/08/65248471735.jpg",
              "name": "Dr. Karen Thomas",
              "age": 41,
              "field": "Psychiatry",
              "experience": "17 years",
              "description": "Dr. Karen Thomas is a trusted psychiatrist who offers mental health support and therapy for various conditions.",
              "timing": "Monday to Friday, 10 AM - 4 PM",
              "info": "Dr. Thomas completed her residency at the Mayo Clinic and specializes in cognitive-behavioral therapy. She is passionate about mental health education and regularly conducts workshops to destigmatize mental illness in her community."
            },
            {
              "id": 10,
              "image": "https://www.duzeygoz.com.tr/wp-content/uploads/2024/04/remziye-hoca-450-1.png",
              "name": "Dr. Daniel White",
              "age": 40,
              "field": "Ophthalmology",
              "experience": "16 years",
              "description": "Dr. Daniel White is a dedicated ophthalmologist with expertise in vision care, eye surgeries, and treatment of eye disorders.",
              "timing": "Tuesday to Saturday, 9 AM - 5 PM",
              "info": "Dr. White received his degree from the University of California, San Francisco. He is recognized for his innovative techniques in cataract surgery and is a member of several ophthalmology societies, frequently contributing to their research initiatives."
            },
            {
              "id": 11,
              "image": "https://www.shutterstock.com/image-photo/beautiful-smiling-female-doctor-happy-260nw-1390534574.jpg",
              "name": "Dr. Laura Harris",
              "age": 52,
              "field": "Rheumatology",
              "experience": "27 years",
              "description": "Dr. Laura Harris specializes in rheumatology, offering care for patients with joint diseases and autoimmune disorders.",
              "timing": "Monday to Thursday, 8 AM - 1 PM",
              "info": "Dr. Harris is a graduate of Yale University and has been at the forefront of research on arthritis. She advocates for holistic treatment approaches and frequently engages in community health initiatives to raise awareness about autoimmune diseases."
            },
            {
              "id": 12,
              "image": "https://www.trdoktor.com/file/2017/08/65248471735.jpg",
              "name": "Dr. James Clark",
              "age": 49,
              "field": "Endocrinology",
              "experience": "24 years",
              "description": "Dr. James Clark is a leading endocrinologist focusing on hormonal disorders and metabolic health.",
              "timing": "Monday to Friday, 9 AM - 3 PM",
              "info": "Dr. Clark earned his medical degree from the University of Pennsylvania and has been recognized for his research in diabetes management. He actively participates in clinical trials aimed at improving treatment outcomes for endocrine disorders."
            }
          
          
      
];

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setDoctors(AllDoctors);
    } catch (error) {
      setError('Failed to load doctors.');
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-5 mt-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center mb-8">
        Doctor <span className="text-primary">Lists</span>
      </h2>
      <div className="flex flex-wrap gap-5 justify-center mt-8">
        {doctors.length === 0 && !error ? (
          <p>Loading...</p>
        ) : (
          doctors.map((doctor) => (
            <div key={doctor.id} className="border border-gray-300 rounded-lg p-5 w-full max-w-xs text-center shadow-md">
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
    Book Now
  </button>
</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


export default DoctorList;

