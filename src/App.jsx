import React from 'react';
import "./App.css";
import NavBar from "./components/NavBar";
import ButtonComponent from './components/ButtonComponent';
import ImgComponent from './components/ImgComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <ButtonComponent text="Aggiungi Immagine"/>
      <div className="img-container">
      <ImgComponent src="https://images.unsplash.com/photo-1520962922320-2038eebab146?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="paesaggio"/>
      <ImgComponent src="https://images.unsplash.com/photo-1508556497405-ed7dcd94acfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="paesaggio"/>
      <ImgComponent src="https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="paesaggio"/>
      <ImgComponent src="https://images.unsplash.com/photo-1600337752115-de2c09d6704f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="paesaggio"/>
      </div>
    </div>
  );
}

export default App;
