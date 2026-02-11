import trash from "../../assets/images/icons/trash.svg";
import heart from "../../assets/images/icons/heart.svg";
import heartComplete from "../../assets/images/icons/heart-complete.svg";

export default function Card({ card, onImageClick, onCardLike }) {
  const { name, link } = card;

  function handleLikeClick() {
    onCardLike(card);
  }

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
          className="place__like"
          src={card.isLiked ? heartComplete : heart}
          alt="Like"
          onClick={handleLikeClick}
        />
      </div>
    </div>
  );
}
