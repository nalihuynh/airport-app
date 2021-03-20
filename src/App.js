import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AirportInfo from './components/AirportInfo';
import RoutesInfo from './components/RoutesInfo';

function App() {
  return (
    <div className="App">
      <Header title="Airport Info"></Header>
      <AirportInfo></AirportInfo>
      <RoutesInfo></RoutesInfo>
      <Footer title="2021"></Footer>
    </div>
  );
}

export default App;