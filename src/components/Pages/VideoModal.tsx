import React from "react";
import Modal from "react-modal";

interface Props {
  link: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "#212121",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "none",
  },
};

export const VideoModal: React.FC<Props> = ({ link, visible, setVisible }) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={() => setVisible(false)}
      style={customStyles}
      ariaHideApp={false}
    >
      <iframe
        width={850}
        height={478}
        src={`https://www.youtube.com/embed/${link}?&autoplay=1`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Modal>
  );
};
