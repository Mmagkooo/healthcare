import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import ImageGallery from "./_components/ImageGallery";
import DoctorList from "./_components/Doctors info/DoctorList";

export default function Home() {
  return (
    <>
     <Hero />
     <CategorySearch/>
     <ImageGallery/>
    <DoctorList />
    </>
  );
}
