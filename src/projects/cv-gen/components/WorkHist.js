import React, { useState } from "react";
import uniqid from 'uniqid';
import WorkHistList from './WorkHistList';

const WorkHist = (props) => {
  const [newWork, setNewWork] = useState({
    company: '',
    title: '',
    duty: '',
    id: uniqid()
  });
  const [works, setWorks] = useState([]);

  // for blurb only
  const handleCompanyChange = (e) => {
    const holdTitle = newWork.title;
    const holdDuty = newWork.duty;
    const holdID = newWork.id;

    setNewWork({
      company: e.target.value,
      title: holdTitle,
      duty: holdDuty,
      id: holdID
    });
  }

  const handleTitleChange = (e) => {
    const holdCompany = newWork.company;
    const holdDuty = newWork.duty;
    const holdID = newWork.id;

    setNewWork({
      company: holdCompany,
      title: e.target.value,
      duty: holdDuty,
      id: holdID
    });
  }

  // for typing in a new duty
  const handleDutyChange = (e) => {
    const holdCompany = newWork.company;
    const holdTitle = newWork.title;
    const holdID = newWork.id;

    setNewWork({
      company: holdCompany,
      title: holdTitle,
      duty: e.target.value,
      id: holdID
    });
  }

  // for add duty button
  const handleWorkArray = (e) => {
    e.preventDefault();

    setWorks(works.concat(newWork));
    setNewWork({
      company: '',
      title: '',
      duty: '',
      id: uniqid()
    });
  }

  // submit company, title and duties array only
  const handleSubmit = (e) => {
    e.preventDefault();
    props.parentCallBack({works});
  }

  const handleDeleteCallback = (childData) => {
    setWorks(works.filter(function(work) {
      return work.id !== childData;
    }));
  }

  return (
    <div className="section">
      <form id="workHist" >
        <span className="inputSectionHeader">Employment History</span>
        <div className="inputArea">
          <label htmlFor="company">Organization: </label>
          <input name="company" onChange={handleCompanyChange} value={newWork.company} />
        </div>
        <div className="inputArea">
          <label htmlFor="title">Job Title: </label>
          <input name="title" onChange={handleTitleChange} value={newWork.title} />
        </div>
        <div className="inputArea">
          <label htmlFor="newDuty">Duties:</label>
          <textarea rows="4" name="newDuty" value={newWork.duty} onChange={handleDutyChange}/>
        </div>
        
        <button onClick={handleWorkArray}>Add Work Experience</button>

        <WorkHistList works={works} deleteDuty={handleDeleteCallback} />

        <button onClick={handleSubmit}>Save Section</button>
      </form>
    </div>
  );
}

export default WorkHist;