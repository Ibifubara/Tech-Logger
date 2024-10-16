import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import M from "materialize-css/dist/js/materialize";
import { updateLog } from "../../actions/logActions";

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if(current){
      setMessage(current.message)
      setAttention(current.Attention)
      setTech(current.tech)
    }
  }, [current])

  const onSubmit =() => {
    if(message === '' || tech === ''){
      M.toast({ html: 'Please enter a message and tech'})
    }else{
      // console.log(message, tech, attention)
      const newUpdateLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      }

      updateLog(newUpdateLog)
      M.toast({ html: `Log updated by ${tech}`})

      //clear field
      setMessage('')
      setTech('')
      setAttention(false)
    }
  }

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter system Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              id='message'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active' id="">
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Sara Wilson'>Sara Wilson</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%"
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  current: state.log.current
})

export default connect(mapStateToProps, {updateLog}) (EditLogModal);
