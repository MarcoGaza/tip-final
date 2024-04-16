import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

function Gallery({ items }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setModalOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };


  return (
    <div>
      <Masonry
        breakpointCols={4} // Responsive breakpoints
        className="gallery-grid"
        columnClassName="gallery-grid__column"
      >
        {items.map((item, index) => (
          <div key={index}>{/* Your existing gallery item rendering logic */}</div>
        ))}
      </Masonry>

      <div className="gallery-grid">
      {items.map((item, index) => (
        <img
          key={item.id}
          src={item.image} // Read directly from the 'image' property
          alt={item.title}
          onClick={() => openModal(index)}
          className="gallery-image"
        />
      ))}
    </div>

    {modalOpen && (
     <div className="modal-backdrop">
       <div className="modal-content">
         <img src={items[currentIndex].image} alt={items[currentIndex].title} /> 
            <h2>{items[currentIndex].title}</h2>
            <p>{items[currentIndex].description}</p>
            <button onClick={prevItem}>Previous</button>
            <button onClick={nextItem}>Next</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
