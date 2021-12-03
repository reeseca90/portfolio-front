import React from "react";

const WorkHistList = (props) => {

  function deleteDutyCallback(e) {
    e.preventDefault();
    const id = e.target.id;
    props.deleteDuty(id);
  }

  return (
    <div>
      {props.works.map((work) => {
        return (
          <div className="flex">
            <span>Company: {work.company}</span>            
            <span>Title: {work.title}</span>
            <span>Duties: {work.duty}</span>
            <button id={work.id} onClick={deleteDutyCallback}>Delete Work Experience</button>
          </div>
        )
      })}
    </div>
  );
}

export default WorkHistList;