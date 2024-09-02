import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import ImageGallery from "./_components/ImageGallery";
// import DoctorList from "./_components/Doctors info/DoctorList";
import DoctorList from "./_components/Doctorlist";
// >>>>>>> 26d9a3b22cdeb707d42f95d7d7928ae5daab8368

export default function Home() {
  return (
    <>
     <Hero />
     <CategorySearch/>
     <ImageGallery/>
     <DoctorList/>
    </>
  );
}
