import React from "react";
import Modal from "react-modal";
import Image from "next/image";

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageSrc: string;
  altText: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "600px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onRequestClose,
  imageSrc,
  altText,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      ariaHideApp={false} // Add this line if you encounter issues with accessibility
    >
      <div className="flex flex-col items-center">
        <Image src={imageSrc} width={560} height={360} alt={altText} />
        <p className="mt-4">{altText}</p>
        <button
          onClick={onRequestClose}
          className="mt-4 bg-gray-500 text-white p-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
