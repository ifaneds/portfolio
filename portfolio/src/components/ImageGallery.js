import React, { useState, useEffect, useCallback } from "react";
import { LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function ImageGallery({ projectName }) {
  const [images, setImages] = useState([]); // [{src, caption}]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tried, setTried] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTried(false);
    // Try to fetch gallery.json for this project
    fetch(`${process.env.PUBLIC_URL}/projects/${projectName}/gallery.json`)
      .then((res) => {
        if (!res.ok) throw new Error('No gallery.json');
        return res.json();
      })
      .then((data) => {
        // Prepend the public URL to each src
        const imagesWithFullSrc = data.map(img => ({
          ...img,
          src: `${process.env.PUBLIC_URL}/projects/${projectName}/${img.src}`
        }));
        setImages(imagesWithFullSrc);
        setIsLoading(false);
        setTried(true);
      })
      .catch(() => {
        setImages([]);
        setIsLoading(false);
        setTried(true);
      });
  }, [projectName]);

  // Remove broken images from state
  const handleImageError = (brokenSrc) => {
    setImages((prev) => prev.filter((img) => img.src !== brokenSrc));
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isModalOpen) {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen, images.length, currentImageIndex, nextImage, prevImage]);

  if (isLoading) {
    return (
      <div className="gallery-placeholder">
        <p>Loading images...</p>
      </div>
    );
  }

  if (images.length === 0 && tried) {
    return (
      <div className="gallery-placeholder">
        <p>No images to display</p>
        <p>Add a gallery.json to the <code>/public/projects/{projectName}/</code> folder</p>
      </div>
    );
  }

  return (
    <div className="image-gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={image.src}
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.caption || `${projectName} screenshot ${index + 1}`}
              onError={() => handleImageError(image.src)}
            />
            {image.caption && (
              <div className="gallery-caption">{image.caption}</div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && images.length > 0 && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <LuX />
            </button>
            
            <button className="modal-nav prev" onClick={prevImage}>
              <LuChevronLeft />
            </button>
            
            <div className="modal-image-container">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].caption || `${projectName} screenshot ${currentImageIndex + 1}`}
                className="modal-image"
              />
              {images[currentImageIndex].caption && (
                <div className="gallery-caption modal-caption">{images[currentImageIndex].caption}</div>
              )}
            </div>
            
            <button className="modal-nav next" onClick={nextImage}>
              <LuChevronRight />
            </button>
            
            <div className="modal-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 