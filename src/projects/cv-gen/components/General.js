import { useState } from 'react';

const General = (props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value); 
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.parentCallBack({
      name,
      address,
      phone,
      email
    });
  }

  return( 
    <div className="section">
    <form id="general" >
      <div className="inputArea">
        <label htmlFor="name">Name: </label>
        <input name="name" onChange={handleNameChange} required />
      </div>

      <div className="inputArea">
        <label htmlFor="address">Address: </label>
        <input name="address" onChange={handleAddressChange} required />
      </div>

      <div className="inputArea">
        <label htmlFor="phone">Phone: </label>
        <input name="phone" onChange={handlePhoneChange} required />
      </div>

      <div className="inputArea">
        <label htmlFor="email">Email: </label>
        <input name="email" onChange={handleEmailChange} required />
      </div>

      <button name="submit" onClick={handleSubmit}>Save Section</button>
    </form>
  </div>
  );
}

export default General;