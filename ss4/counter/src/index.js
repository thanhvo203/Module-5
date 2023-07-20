import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstCount from './components/FirstCount';
import SecondCount from './components/SecondCount';



class Show extends React.Component {
  
  render () {
    return (
      <>
        <FirstCount />
        <SecondCount />
      </>
    )
  }
}

ReactDOM.render(<Show />,document.getElementById("root"));

