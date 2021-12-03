import { useState } from 'react';
import uniqid from 'uniqid';
import ProfSumSkillList from './ProfSumSkillLIst';

const ProfSum = (props) => {
  const [blurb, setBlurb] = useState('');
  const [newSkill, setNewSkill] = useState({
    text: '', 
    id: uniqid()}
    );
  const [skills, setSkills] = useState([]);

  // for blurb only
  const handleBlurbChange = (e) => {
    setBlurb(e.target.value);
  }

  // for typing in a new skill
  const handleSkillChange = (e) => {
    const holdID = newSkill.id;

    setNewSkill({
      text: e.target.value,
      id: holdID
    });
  }

  // for add skill button
  const handleSkillArray = (e) => {
    e.preventDefault();

    setSkills(skills.concat(newSkill));
    setNewSkill({
      text: '',
      id: uniqid()
    });
  }

  // submit blurb and skills array only
  const handleSubmit = (e) => {
    e.preventDefault();

    props.parentCallBack({
      blurb,
      skills
    });
  }

  const handleDeleteCallback = (childData) => {
    setSkills(skills.filter(function(skill) {
      return skill.id !== childData;
    }));
  }

  return (
    <div className="section">
      <form id="profSum" >
        <span className="inputSectionHeader">Professional Summary</span>
        <div className="inputArea">
          <label htmlFor="blurb">Summary: </label>
          <textarea rows="4" name="blurb" onChange={handleBlurbChange} required />
        </div>
        <div className="inputArea">
          <label htmlFor="newSkill">Skills: </label>
          <input name="newSkill" value={newSkill.text} onChange={handleSkillChange} />
        </div>
        <button onClick={handleSkillArray}>Add New Skill</button>

        <ProfSumSkillList skills={skills} deleteSkill={handleDeleteCallback} />

        <button onClick={handleSubmit}>Save Section</button>
      </form>
    </div>
  );

}

export default ProfSum;