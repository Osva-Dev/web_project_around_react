import trash from "../../assets/images/icons/trash.svg";
import heart from "../../assets/images/icons/heart.svg";

export default function Card({ card }) {
  const { name, link, isLiked } = card;

  return (
    <li className="place__card">
      <img className="place__delete" src={trash} alt="Eliminar" type="button" />

      <img className="place__image" src={link} alt={name} />

      <div className="place__content">
        <h2 className="place__title">{name}</h2>

        <img
          className={`place__like ${isLiked ? "place__like_active" : ""}`}
          src={heart}
          alt="Like"
        />
      </div>
    </li>
  );
}
