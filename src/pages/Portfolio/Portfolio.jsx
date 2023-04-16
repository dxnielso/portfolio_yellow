import styles from "./portfolio.module.css";
import "../../index.css";
import Projects from "../../projects.js";
import Navbar from "../../components/Navbar";
import Cursor from "../../components/Cursor";
import PortfolioCard from "../../components/PortfolioCard";
import Modal from "../../components/Modal";
import { useState, useEffect } from "react";

function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState({});
  // const [filtro, setFiltro] = useState('all');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Llenamos la lista de proyectos
    fillProyectsList("all");
  }, []);

  const handlePortfolioClick = (e, filtro) => {
    // Eliminamos la clase del elemento que contiene la clase
    document
      .getElementsByClassName("portafolio__botonSeleccionado")[0]
      .classList.remove("portafolio__botonSeleccionado");

    // Agregamos la clase al nuevo elemento
    e.target.classList.add("portafolio__botonSeleccionado");

    // Limpiamos los proyectos actuales de la lista
    setProjects("");
    // Actualizamos la lista de proyectos
    fillProyectsList(filtro);
  };

  const fillProyectsList = (filtro) => {
    // setProjects(Projects.filter(project => project.tags == filtro))
    setProjects(
      Projects.filter((project) => {
        project.tags.map(tag => {
          return tag == filtro
        });
      })
    );
    console.log(projects)
  };

  return (
    <>
      <Navbar />
      <Modal open={openModal} setOpenModal={setOpenModal} project={project} />
      <main className={styles.portfolio}>
        <Cursor />
        <div className={styles.portfolio__titleContainer}>
          <h1 className={styles.portfolio__title}>
            <span>My</span> portfolio
          </h1>
          <h2 className={styles.portfolio__secondTitle}>works</h2>
        </div>
        <nav className={styles.portfolio__navbar}>
          <ul>
            <li>
              <button
                id="button-selected"
                className="portafolio__botonSeleccionado"
                onClick={(e) => handlePortfolioClick(e, "all")}
              >
                all
              </button>
            </li>
            <li>
              <button onClick={(e) => handlePortfolioClick(e, "landing-page")}>
                Landing pages
              </button>
            </li>
            <li>
              <button onClick={(e) => handlePortfolioClick(e, "web")}>
                Web
              </button>
            </li>
            <li>
              <button onClick={(e) => handlePortfolioClick(e, "mobile")}>
                Mobile
              </button>
            </li>
            <li>
              <button onClick={(e) => handlePortfolioClick(e, "other")}>
                other projects
              </button>
            </li>
          </ul>
        </nav>
        <div className={styles.portfolio__grid}>
          {projects.map((project) => {
            return (
              <PortfolioCard
                key={project.id}
                id={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
                preview={project.preview}
                repo={project.repo}
                client={project.client}
                lenguages={project.lenguages}
                tags={project.tags}
                setOpenModal={setOpenModal}
                setProject={setProject}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Portfolio;
