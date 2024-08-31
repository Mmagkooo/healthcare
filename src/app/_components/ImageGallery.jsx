import React from 'react';

const ImageGallery = () => {
  // Define images with corresponding labels
  const images = [
    {
      src: 'https://www.shutterstock.com/image-vector/vector-human-brain-on-white-600nw-1928125664.jpg',
      label: 'Human Brain'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_AfQ4FNOvNFGG3zR5aapAVw7LS7wX_5LYQ&s',
      label: 'Abstract Art'
    },
    {
      src: 'https://img.freepik.com/premium-vector/kidney-icon-vector-illustration_665655-11545.jpg',
      label: 'Kidney'
    },
    {
      src: 'https://i.pinimg.com/474x/d7/40/7a/d7407a4e8be2bdbc8e06cff6da7b46ac.jpg',
      label: 'Nature'
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image, index) => (
        <div key={index} className="w-48 border-2 border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-48 object-cover" />
          <div className="text-center mt-2 text-gray-800 font-semibold">{image.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
