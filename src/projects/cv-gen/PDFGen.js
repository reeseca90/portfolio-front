import React from 'react';
import General from "./components/General";
import ProfSum from './components/ProfSum';
import WorkHist from './components/WorkHist';
import Edu from './components/Edu';
import axios from 'axios'; 

class PDFGen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this gets populated by general, profsum, workhist, edu
      name: '',
      address: '',
      phone: '',
      email: '',
      summary: '',
      allSkills: null,
      workHist: null,
      edu: null
    }
  }

  handleCallback = (childData) => {
    this.setState(childData);
  }

  postPDF = async (e) => {
    e.preventDefault();

    const postBody = {
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      summary: this.state.blurb,
      allSkills: this.state.skills,
      workHist: this.state.works,
      edu: this.state.edu
    }

    try {
      const response = await axios.post('/api/pdf', { postBody } );
      if (response.data === "Success") {
        window.location.href = '/api/getpdf'
      } 
    } catch (err) {
      console.log(err);
    }
  }
  
  render () {
    return (
      <div id="pdfGenArea">
        <p>
          Enter your information then press the "Save Section" button when finished. In the the Summary, Employment, and Education sections,&nbsp;
          click the 'Add' button when done entering that information. Add as many of each type as you'd like, then press the "Save Section" button when complete.&nbsp;
          Once all applicable sections are saved, press the "Generate PDF" button at the bottom. 
        </p>
          
        <div id="inputs">
          <General parentCallBack={this.handleCallback} />
          <ProfSum parentCallBack={this.handleCallback} />
          <WorkHist parentCallBack={this.handleCallback} />
          <Edu parentCallBack={this.handleCallback} />
        </div>

        <div className='buttons'>
          <button onClick={this.postPDF}>Generate PDF</button>
        </div>
        <p>Note: If you don't press "Save Section", that section will not populate. This is intentional behavior, since not everyone will have information for every section.</p>
      </div>
    );
  }
}

export default PDFGen;
