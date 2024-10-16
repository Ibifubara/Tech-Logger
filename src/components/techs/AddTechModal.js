import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const onSubmit =() => {
    if(firstName === '' || lastName === ''){
      M.toast({ html: 'Please enter the first and last name'})
    }else{
      console.log(firstName, lastName)

      //clear field
      setFirstName('')
      setLastName('')
    }
  }

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active' id="">
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active' id="">
              First Name
            </label>
          </div>
        </div>

        
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-green btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};


export default AddTechModal;
