export default function Card({ recipe }) {
  const { name, image, tag, timeToCookInMinutes } = recipe;
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            <p>{tag}</p>
          </div>
          <p className="time-text">{timeToCookInMinutes} mintues</p>
        </div>
      </div>
    </div>
  );
}
