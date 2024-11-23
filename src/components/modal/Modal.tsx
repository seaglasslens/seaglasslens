import { useRef, useEffect, useContext } from "react";
import { AppContextValue, AppContext } from "../app/AppContext.tsx";
import { openUISound, closeUISound } from "../app/audio.tsx";

interface ModalProps {
  title: string;
  content: React.ReactElement;
  open: boolean;
  modalOpenerRef: React.RefObject<HTMLButtonElement | null>;
  handleClose: () => void;
}

const Modal = ({
  title,
  content,
  open,
  modalOpenerRef,
  handleClose,
}: ModalProps) => {
  const {
    soundSetting,
    keyboardNavigation,
    rerenderCount,
    resetRerenderCount,
  } = useContext(AppContext) as AppContextValue;

  const modalRef = useRef<HTMLDivElement | null>(null);

  const unmountModal = () => {
    if (soundSetting) {
      closeUISound.play();
    }
    modalOpenerRef.current?.focus();
    if (!keyboardNavigation) {
      modalOpenerRef.current?.blur();
    }
    handleClose();
    resetRerenderCount();
  };

  useEffect(() => {
    if (open && modalRef.current !== null) {
      if (soundSetting) {
        openUISound.play();
      }

      const modalElement = modalRef.current;
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

      // keyboard navigation edge case within featured artists modal
      // console.log(rerenderCount);
      if (title === "Featured Artists" && rerenderCount > 0) {
        (document.activeElement as HTMLElement).focus();
      } else {
        (firstFocusableElement as HTMLElement).focus();
      }

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          if (
            event.shiftKey &&
            document.activeElement === firstFocusableElement
          ) {
            event.preventDefault();
            (lastFocusableElement as HTMLElement).focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastFocusableElement
          ) {
            event.preventDefault();
            (firstFocusableElement as HTMLElement).focus();
          }
        }
      };

      const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          unmountModal();
        }
      };

      modalElement.addEventListener("keydown", handleTabKeyPress);
      document.addEventListener("keydown", handleEscapeKeyPress);

      return () => {
        modalElement.removeEventListener("keydown", handleTabKeyPress);
        document.removeEventListener("keydown", handleEscapeKeyPress);
      };
    }
  }, [open, soundSetting, keyboardNavigation, rerenderCount]);

  return (
    <>
      {open ? (
        <div
          className="backdrop"
          ref={modalRef}
          role="modal"
          aria-modal="true"
          aria-labelledby={title}
        >
          <button
            className="close"
            onClick={unmountModal}
            title="Close"
            aria-label="Exit modal"
            tabIndex={0}
          />
          {content}
        </div>
      ) : null}
    </>
  );
};

export default Modal;
