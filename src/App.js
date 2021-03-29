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
      isOpen: false,
      src: 'https://placehold.it/500x100/444',
    }
  }

  showFavePic = (animal) => {
    // console.log("clicked")
    // console.log(animal)
    this.setState({      
      isOpen: !this.state.isOpen,
      src: animal,
    })
  }
  render () {
    console.log(this.state.src)
    return(
      <>
        <Main animalArray = {animalArray} showFavePic={this.showFavePic}/>
        <SelectedBeast img={this.state.src}></SelectedBeast>
      </>
    )
  }
}

export default App;
