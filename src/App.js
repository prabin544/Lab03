import './App.css';
import React from 'react'
import Main from './components/Main';
import { Modal, Button, Image } from "react-bootstrap";
import animalArray from './data.json';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      src: 'https://placehold.it/500x100/444',
    }
  }

  showFavePic = (animal) => {
    this.setState({
      isOpen: true,
      src: animal,
    })
  }
  render () {
    return(
      <>
        <Modal>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><Image src={this.state.src} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal>
        <Main animalArray = {animalArray} showFavePic={this.showFavePic}/>
      </>
    )
  }
}

export default App;
