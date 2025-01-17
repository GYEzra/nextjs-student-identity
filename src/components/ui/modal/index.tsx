import { FormLayout } from "@/components/layouts";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box rounded-md">
        {onClose && (
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black" onClick={onClose}>
            ✕
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
