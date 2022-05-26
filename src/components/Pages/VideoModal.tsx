import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

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
      <YouTube
        videoId={link}
        opts={{
          height:
            document.body.clientHeight > 478 ? 478 : document.body.clientHeight,
          width:
            document.body.clientWidth > 850 ? 850 : document.body.clientWidth,

          playerVars: {
            autoplay: 1,
          },
        }}
        onEnd={() => setVisible(false)}
      />
    </Modal>
  );
};
