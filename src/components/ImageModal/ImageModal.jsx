import Modal from 'react-modal';
// import css from './ImageModal.module.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(15, 15, 15, 0.9)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, getLink }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <img src={getLink} alt="Image" />
        </div>
      </Modal>
    </div>
  );
}
