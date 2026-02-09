import trash from "../../assets/images/icons/trash.svg";
import heart from "../../assets/images/icons/heart.svg";

export default function Card({ card, onImageClick }) {
  const { name, link, isLiked } = card;

  return (
    <div className="place__card">
      <img className="place__delete" src={trash} alt="Eliminar" />

      <img
        className="place__image"
        src={link}
        alt={name}
        onClick={onImageClick}
      />

      <div className="place__content">
        <h2 className="place__title">{name}</h2>

        <img
          className={`place__like ${isLiked ? "place__like_active" : ""}`}
          src={heart}
          alt="Like"
        />
      </div>
    </div>
  );
}
