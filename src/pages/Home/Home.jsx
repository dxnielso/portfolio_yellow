import styles from "./home.module.css";
import Navbar from "../../components/Navbar";
import Cursor from "../../components/Cursor";
import BotonIcono from '../../components/BotonIcono'
import Person from "../../images/person.jpg";
import {FaArrowRight} from 'react-icons/fa';

function Home() {
  return (
    <>
      <Navbar />
      <Cursor />
      <main className={styles.home}>
        <div className={styles.home__wave}></div>        
        <div className={styles.home__imageContainer}>
          <img src={Person} alt="Imagen de persona" />
        </div>
        <div className={styles.home__textContainer}>
          <h1 className={styles.home__title}>
            I'm Daniel Solis <span>Web designer</span>
          </h1>
          <p className={styles.home__description}>
            I'm a Tunisian based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <BotonIcono ruta='/about' texto='more about me' icono={<FaArrowRight className={styles.home__arrow}/>}/>
        </div>
      </main>
    </>
  );
}

export default Home;
