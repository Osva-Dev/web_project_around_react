export default function Card({ card, onDelete, onLike }) {
  return (
    <div className="place__card">
      <img
        className="place__delete"
        src="./images/icons/trash.svg"
        alt="Eliminar"
        onClick={onDelete}
      />

      <img className="place__image" src={card.image} alt={card.name} />

      <div className="place__content">
        <h2 className="place__title">{card.name}</h2>

        <img
          className={`place__like ${card.liked ? "place__like_active" : ""}`}
          src="./images/icons/heart.svg"
          alt="Like"
          onClick={onLike}
        />
      </div>
    </div>
  );
}
