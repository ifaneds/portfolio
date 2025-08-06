import React, { useState, useEffect, useCallback, useMemo } from "react";
import { LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function ImageGallery({ projectName }) {
  // Consolidate related state into a single object
  const [galleryState, setGalleryState] = useState({
    images: [],
    currentImageIndex: 0,
    isModalOpen: false,
    isLoading: true,
    tried: false
  });

  // Memoize the gallery URL to prevent unnecessary re-computations
  const galleryUrl = useMemo(() => 
    `${process.env.PUBLIC_URL}/projects/${projectName}/gallery.json`,
    [projectName]
  );

  useEffect(() => {
    setGalleryState(prev => ({ ...prev, isLoading: true, tried: false }));
    
    fetch(galleryUrl)
      .then((res) => {
        if (!res.ok) throw new Error('No gallery.json');
        return res.json();
      })
      .then((data) => {
        const imagesWithFullSrc = data.map(img => ({
          ...img,
          src: `${process.env.PUBLIC_URL}/projects/${projectName}/${img.src}`
        }));
        setGalleryState(prev => ({
          ...prev,
          images: imagesWithFullSrc,
          isLoading: false,
          tried: true
        }));
      })
      .catch(() => {
        setGalleryState(prev => ({
          ...prev,
          images: [],
          isLoading: false,
          tried: true
        }));
      });
  }, [galleryUrl, projectName]);

  // Memoize navigation functions to prevent unnecessary re-renders
  const nextImage = useCallback(() => {
    setGalleryState(prev => ({
      ...prev,
      currentImageIndex: (prev.currentImageIndex + 1) % prev.images.length
    }));
  }, []);

  const prevImage = useCallback(() => {
    setGalleryState(prev => ({
      ...prev,
      currentImageIndex: (prev.currentImageIndex - 1 + prev.images.length) % prev.images.length
    }));
  }, []);

  const openModal = useCallback((index) => {
    setGalleryState(prev => ({
      ...prev,
      currentImageIndex: index,
      isModalOpen: true
    }));
  }, []);

  const closeModal = useCallback(() => {
    setGalleryState(prev => ({ ...prev, isModalOpen: false }));
  }, []);

  const handleImageError = useCallback((brokenSrc) => {
    setGalleryState(prev => ({
      ...prev,
      images: prev.images.filter((img) => img.src !== brokenSrc)
    }));
  }, []);

  // Memoize keyboard event handler
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  }, [closeModal, nextImage, prevImage]);

  useEffect(() => {
    if (galleryState.isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [galleryState.isModalOpen, handleKeyDown]);

  // Memoize current image to prevent unnecessary re-renders
  const currentImage = useMemo(() => 
    galleryState.images[galleryState.currentImageIndex],
    [galleryState.images, galleryState.currentImageIndex]
  );

  if (galleryState.isLoading) {
    return (
      <div className="gallery-placeholder">
        <p>Loading images...</p>
      </div>
    );
  }

  if (galleryState.images.length === 0 && galleryState.tried) {
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
        {galleryState.images.map((image, index) => (
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
      {galleryState.isModalOpen && galleryState.images.length > 0 && currentImage && (
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
                src={currentImage.src}
                alt={currentImage.caption || `${projectName} screenshot ${galleryState.currentImageIndex + 1}`}
                className="modal-image"
              />
              {currentImage.caption && (
                <div className="gallery-caption modal-caption">{currentImage.caption}</div>
              )}
            </div>
            
            <button className="modal-nav next" onClick={nextImage}>
              <LuChevronRight />
            </button>
            
            <div className="modal-indicators">
              {galleryState.images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === galleryState.currentImageIndex ? 'active' : ''}`}
                  onClick={() => setGalleryState(prev => ({ ...prev, currentImageIndex: index }))}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 