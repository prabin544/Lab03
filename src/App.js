import './App.css';
import React from 'react'
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Modal from 'react-bootstrap/Modal';
import data from './data.json';
import { Button, Card } from 'react-bootstrap';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: 'none',
      src: 'https://placehold.it/500x100/444',
    }
  }

  showFavePic = (pic) => {
    this.setState({
      display: 'inline-block',
      src: pic,
    })
  }
  render () {
    return(
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Main data = {data}/>
      </>
    )
  }
}

export default App;
