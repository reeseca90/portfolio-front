import React from "react";
import uniqid from 'uniqid';
import EduList from "./EduList";

class Edu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newEdu: {
        school: '',
        degree: '',
        years: '',
        gpa: '',
        id: uniqid()
      },
      edu: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDeleteCallback = this.handleDeleteCallback.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.handleYearsChange = this.handleYearsChange.bind(this);
    this.handleGPAChange = this.handleGPAChange.bind(this);
  }


  handleSchoolChange(e) {
    const target = e.target;
    const input = target.value;
    const holdID = this.state.newEdu.id;
    const holdDegree = this.state.newEdu.degree;
    const holdYears = this.state.newEdu.years;
    const holdGPA = this.state.newEdu.gpa;

    this.setState({
      newEdu: {
        school: input,
        degree: holdDegree,
        years: holdYears,
        gpa: holdGPA,
        id: holdID
      }
    });
  }

  handleDegreeChange(e) {
    const target = e.target;
    const input = target.value;
    const holdID = this.state.newEdu.id;
    const holdSchool = this.state.newEdu.school;
    const holdYears = this.state.newEdu.years;
    const holdGPA = this.state.newEdu.gpa;

    this.setState({
      newEdu: {
        school: holdSchool,
        degree: input,
        years: holdYears,
        gpa: holdGPA,
        id: holdID
      }
    });
  }

  handleYearsChange(e) {
    const target = e.target;
    const name = target.name;
    const input = target.value;
    const holdID = this.state.newEdu.id;
    const holdSchool = this.state.newEdu.school;
    const holdDegree = this.state.newEdu.degree;
    const holdGPA = this.state.newEdu.gpa;

    this.setState({
      newEdu: {
        school: holdSchool,
        degree: holdDegree,
        years: input,
        gpa: holdGPA,
        id: holdID
      }
    });
  }

  handleGPAChange(e) {
    const target = e.target;
    const input = target.value;
    const holdID = this.state.newEdu.id;
    const holdSchool = this.state.newEdu.school;
    const holdDegree = this.state.newEdu.degree;
    const holdYears = this.state.newEdu.years;

    this.setState({
      newEdu: {
        school: holdSchool,
        degree: holdDegree,
        years: holdYears,
        gpa: input,
        id: holdID
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.parentCallBack(this.state);
  }

  handleSave(e) {
    e.preventDefault();

    this.setState({
      edu: this.state.edu.concat(this.state.newEdu),
      newEdu: {
        school: '',
        degree: '',
        years: '',
        gpa: '',
        id: uniqid()
      }
    });
  }

  handleDeleteCallback(childData) {
    this.setState({
      edu: this.state.edu.filter(function(edu) {
        return edu.id !== childData;
      })
    });
  }

  render() {
    return (
      <div className="section eduSection">
        <form id="edu">
          <span className="inputSectionHeader">Education</span>
          <div className="inputArea">
            <label htmlFor="school">School Name: </label>
            <input name="school" value={this.state.newEdu.school} onChange={this.handleSchoolChange} />
          </div>

          <div className="inputArea">
            <label htmlFor="degree">Degree or Major: </label>
            <input name="degree" value={this.state.newEdu.degree} onChange={this.handleDegreeChange} />
          </div>

          <div className="inputArea">
            <label htmlFor="years">Years Attended: </label>
            <input name="years" value={this.state.newEdu.years} onChange={this.handleYearsChange} />
          </div>

          <div className="inputArea">
            <label htmlFor="gpa">GPA (optional): </label>
            <input name="gpa" value={this.state.newEdu.gpa} onChange={this.handleGPAChange} />
          </div>

          <button name="saveEdu" onClick={this.handleSave}>Add Education</button>
        </form>

        <EduList edu={this.state.edu} deleteEdu={this.handleDeleteCallback} />
        <button name="submit" onClick={this.handleSubmit}>Save Section</button>
      </div>
    );
  }
}

export default Edu;