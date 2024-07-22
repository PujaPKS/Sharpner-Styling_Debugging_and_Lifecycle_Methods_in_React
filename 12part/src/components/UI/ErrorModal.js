// Write your code here:
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import './ErrorModal.css';

//These Backdrop and ErrorModal can be made in seperate file and then can be imported here also
const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onConfirm}></div>;   
}

const ModalOverlay = (props) => {
  return(
    <Card className='modal'>
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
      
      <div className='content'>
        <p>{props.message}</p>
      </div>

      <footer className='actions'>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>

    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {/* <div className='backdrop' onClick={props.onConfirm}></div> */}
      
      {/* <Card className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        
        <div className='content'>
          <p>{props.message}</p>
        </div>

        <footer className='actions'>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>

      </Card> */}

      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}/>,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <ModalOverlay 
          title={props.title} 
          message={props.message} 
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}

    </React.Fragment>
  )
}

export default ErrorModal;