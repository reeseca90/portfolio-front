import React from "react";

const ProfSumSkillList = (props) => {

  function deleteSkillCallback(e) {
    e.preventDefault();
    const id = e.target.id;
    props.deleteSkill(id);
  }

  return (
    <ul>
      {props.skills.map((skill) => {
        return (
          <div className="oneLine">
            <button id={skill.id} onClick={deleteSkillCallback}>Delete Skill</button>
            <li key={skill.id}>{skill.text}</li>
          </div>
        )
      })}
    </ul>
  );
};

export default ProfSumSkillList;