import styles from "../css/modal.module.css";
import {
  AiFillCloseCircle,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";

function Modal({ open, setOpenModal, project }) {
  return (
    open && (
      <div className={styles.modal} onClick={() => setOpenModal(false)}>
        <div className={styles.modal__box} onClick={(e) => e.stopPropagation()}>
          <AiOutlineClose
            className={styles.modal__closeButton}
            onClick={() => setOpenModal(false)}
          />
          <h1>{project.title}</h1>
          <img src={project.image} alt={project.title} />
        </div>
      </div>
    )
  );
}

export default Modal;
