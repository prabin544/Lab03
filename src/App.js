import './App.css';
import React from 'react'
import Main from './components/Main';
import { Modal, Button, Image } from "react-bootstrap";
import SelectedBeast from './components/SelectedBeast'
import animalArray from './data.json';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayModal: false,
      src: 'https://placehold.it/500x100/444',
    }
  }

  showFavePic = (animal) => {
    // console.log("clicked")
    // console.log(animal)
    this.setState({      
      src: animal,
      displayModal: true
    })
  }

  hideModal = () => {
    this.setState({displayModal: false})
  }

  showModal = () => {
    this.setState({displayModal: true})
  }
  
  render () {
    return(
      <>
        <Main animalArray = {animalArray} showFavePic={this.showFavePic}/>
        <SelectedBeast 
        displayModal ={this.state.displayModal}
        hideModal={this.hideModal}
        img={this.state.src} 
        />
      </>
    )
  }
}

export default App;
