import React, { useState } from 'react';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Gallery</h1>
      <div className="text-center mb-6">
        <button onClick={() => setFilter('all')} className="btn-filter">All</button>
        <button onClick={() => setFilter('photos')} className="btn-filter">Photos</button>
        <button onClick={() => setFilter('videos')} className="btn-filter">Videos</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGalleryItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
            {item.type === 'photo' ? (
              <img src={item.src} alt={item.alt} className="w-full h-64 object-cover mb-2 transition-transform duration-300 hover:scale-105" />
            ) : (
              <video src={item.src} controls className="w-full h-64 object-cover mb-2 transition-transform duration-300 hover:scale-105"></video>
            )}
            <p className="text-gray-800 text-sm">{item.caption}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const galleryItems = [
  { type: 'photo', src: '/assets/sports_day.jpg', alt: 'Sports Day', caption: 'Students participating in various sports events.' },
  { type: 'photo', src: '/assets/science_exhibition.jpg', alt: 'Science Exhibition', caption: 'Students presenting their science projects.' },
  { type: 'photo', src: '/assets/cultural_fest.jpg', alt: 'Cultural Fest', caption: 'Students performing in the cultural fest.' },
  { type: 'photo', src: '/assets/classroom.jpg', alt: 'Classroom', caption: 'A glimpse of our interactive classrooms.' },
  { type: 'photo', src: '/assets/library.jpg', alt: 'Library', caption: 'Students reading and studying in the school library.' },
  { type: 'video', src: '/assets/school_tour.mp4', caption: 'Virtual tour of Springdale Public School.' },
  { type: 'video', src: '/assets/annual_function.mp4', caption: 'Highlights from the Annual Function 2023.' },
];

const filteredGalleryItems = galleryItems;

<Footer />

export default GalleryPage;
