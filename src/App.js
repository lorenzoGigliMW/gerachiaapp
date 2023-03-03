import logo from './logo.svg';
import './App.css';
import BottoneBello from './BottoneBello';
import { Component } from 'react';
import LabelBella from './LabelBella';
import axios from 'axios';
import AppAnimale from './AppAnimale';
import AppVegetale from './AppVegetale';



export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render = () => (
    <div className="App">
      <AppAnimale />
      <AppVegetale />
    </div>
  );
}
