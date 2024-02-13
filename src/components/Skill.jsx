import Tooltip from '@mui/material/Tooltip';
export function Skill({ name, image }) {
  return (
    <Tooltip title={name} placement='top'>
    <div className="skill">
      {/* <h3>{name}</h3> */}
      <img src={image} alt={name} />
    </div>
    </Tooltip>
  );
}
