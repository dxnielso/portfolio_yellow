import styles from "../css/portfolioCard.module.css";

function PortfolioCard({ id, title, image, description, preview, repo, client, lenguages, tags, setOpenModal, setProject}) {
  
  const handleCardClick = () => {
    setOpenModal(true)
    setProject({
      id,
      title,
      image,
      description,
      preview,
      repo,
      client,
      lenguages,
      tags
    })
  }
  
  return (
    <div className={styles.portfolioCard} onClick={handleCardClick}>
      <div className={styles.portfolioCard__wave}>
        <span>{title}</span>
      </div>
      <img src={image} alt={`Proyecto de ${title}`} />
    </div>
  );
}

export default PortfolioCard;
