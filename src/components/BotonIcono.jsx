import { Link } from "react-router-dom";
import styles from "../css/botonIcono.module.css";

function BotonIcono({ ruta, texto, icono }) {
  return (
    <Link to={ruta} className={styles.botonIcono__link}>
      <span>{texto}</span> {icono}
    </Link>
  );
}

export default BotonIcono;
