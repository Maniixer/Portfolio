export function Skill({ name, image }) {
  return (
    <div className="skill">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </div>
  );
}
