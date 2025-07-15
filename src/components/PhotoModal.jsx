// src/components/PhotoModal.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/slices/modalSlice';

const PhotoModal = () => {
  const dispatch = useDispatch();
  const { isOpen, selectedImage } = useSelector(state => state.modal);

  if (!isOpen || !selectedImage) return null;

  return (
    <div className="modal-overlay" onClick={() => dispatch(closeModal())}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={selectedImage.url} alt={selectedImage.title} />
        <p>{selectedImage.title}</p>
        <button onClick={() => dispatch(closeModal())}>Close</button>
      </div>
    </div>
  );
};

export default PhotoModal;
