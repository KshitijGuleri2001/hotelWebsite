import React from "react";

const Modal = ({ open, onClose, selectedImage }) => {
  if (!open || !selectedImage) return null;

  return (
    <div className="overlay z-50 px-4 py-12 fixed inset-0  overflow-y-auto bg-black/60" onClick={onClose}>
     <div className="container mx-auto max-w-[1140px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex bg-white shadow-lg rounded-md z-50">
        <div className="container mx-auto max-w-[1100px]">
          <p onClick={onClose} className="cursor-pointer fixed top-8 right-8"> X </p>
          <div className="content h-[600px] flex flex-col justify-center text-center mt-10 py-12 px-8">
            <img
              className="w-full h-full object-cover"
              src={selectedImage.src}
              alt={`Selected Image ${selectedImage.id}`}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
