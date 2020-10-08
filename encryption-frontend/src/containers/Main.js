import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decodeMessage, encodeMessage } from '../store/actions';

const Main = () => {

  const [state, setState] = useState({
    decoded: '',
    password: '',
    encoded: '',
  });

  const dispatch = useDispatch();
  const encoded = useSelector(state => state.encodedData);
  const decoded = useSelector(state => state.decodedData);

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const encodeMessageHandler = () => {
    if (!state.password) {
      console.log('Please type a password');
    } else {
      dispatch(encodeMessage(state));
      setState({
        ...state,
        encoded: '',
      });
    }
  };

  const decodeMessageHandler = () => {
    if (!state.password) {
      console.log('Please type a password');
    } else {
      dispatch(decodeMessage(state));
      setState({
        ...state,
        decoded: '',
      });
    }
  };

  return (
    <div className='Main'>
      <h2>Encryption form</h2>
      <div className='inputBlock'>
        <label htmlFor="decoded">Decoded message</label>
        <textarea
          name="encoded"
          value={state.encoded}
          onChange={inputChangeHandler}
          placeholder={decoded.decoded}
          id="decoded"
          cols="30"
          rows="10"
        />
      </div>
      <div className='inputBlock'>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={inputChangeHandler}
          id='password'
        />
        <div className='btn'>
          <button onClick={encodeMessageHandler}>&#8595;</button>
          <button onClick={decodeMessageHandler}>&#8593;</button>
        </div>
      </div>
      <div className='inputBlock'>
        <label htmlFor="encoded">Encoded message</label>
        <textarea
          name="decoded"
          value={state.decoded}
          onChange={inputChangeHandler}
          placeholder={encoded.encoded}
          id="encoded"
          cols="30"
          rows="10"
        />
      </div>
    </div>
  );
};

export default Main;