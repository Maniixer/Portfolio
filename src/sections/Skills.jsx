import skillsData from "../skillsData";
import { Skill } from "../components/Skill";

function Skills() {
  return (
    <section>
      <div className="container">
        <h1 className="section-title">Skills</h1>
        <div className="toggle"></div>
        <div className="skills">
          {skillsData.map((skill) => (
            <Skill key={skill.id} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Skills };
