import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import ImageGallery from "./_components/ImageGallery";

export default function Home() {
  return (
    <>
     <Hero />
     <CategorySearch/>
     <ImageGallery/>
    </>
  );
}
