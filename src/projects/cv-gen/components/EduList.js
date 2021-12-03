import React from "react";

const EduList = (props) => {

  function deleteEduCallback(e) {
    e.preventDefault();
    const id = e.target.id;
    props.deleteEdu(id);
  }

  return (
    <div>
      {props.edu.map((edu) => {
        return (
          <div className="flex">
            <span>School: {edu.school}</span>
            <span>Years Attended: {edu.years}</span>
            <span>Major: {edu.degree}</span>
            <span>GPA: {edu.gpa}</span>
            <button id={edu.id} onClick={deleteEduCallback}>Delete Education</button>
          </div>
        )
      })}
    </div>
  );
}

export default EduList;