"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import ContactForm from "./ContactForm";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      {isOpen && (
        <>
          <div
            className="modal fade contactmodal-popup show"
            style={{ display: "block" }}
            role="dialog"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content border-0 bg-white">
                <div className="modal-body position-relative bg-white p-0">
                  <button
                    type="button"
                    className="btn-close position-absolute"
                    style={{
                      backgroundImage: "none",
                      top: "10px",
                      right: "10px",
                      zIndex: 2,
                    }}
                    onClick={closeModal}
                    aria-label="Close"
                  >
                    <i
                      className="fa-solid fa-circle-xmark"
                      style={{ fontSize: "18px" }}
                    ></i>
                  </button>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </ModalContext.Provider>
  );
}
