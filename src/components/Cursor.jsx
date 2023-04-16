import styles from "../css/cursor.module.css";
import { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMove = (e) => {
    const circle = document.getElementById('cursor');
    circle.style.top = (e.clientY - 15) + 'px';
    circle.style.left = (e.clientX - 16) + 'px';
    // console.log(e.clientY)
  };

  const handleMouseLeave = () => {
    const circle = document.getElementById('cursor');
    circle.style.opacity = '0';
  }

  const handleMouseEnter = () => {
    const circle = document.getElementById('cursor');
    circle.style.opacity = '1';
  }

  return <div className={styles.cursor} id='cursor'></div>;
}

export default Cursor;
