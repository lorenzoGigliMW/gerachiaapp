//import logo from './logo.svg';
import './App.css';
import BottoneBello from './BottoneBello';
import { Component } from 'react';
import LabelBella from './LabelBella';
import axios from 'axios';

// const selectVerdura = () => {
//   console.log("DaJEEEEEEEEEEEEEEEEEEEEEE");
// }

export default class AppAnimale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animale: 'suino'
    }
  }

  // elaboraResponse(response) {
  //   // console.log('pippo', pippo);
  //   // console.log('pippo2', pippo2);
  //   this.setState( { response });
  // }

  // contesto dell'oggetto
  componentDidMount = () => {
    const that = this;
    // contesto della funzione did mount
    function funzioneDentro() {
      // contesto della funzione dentro
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          // handle success
          console.log(response);
          // contesto del then
          // console.log('pippo', pippo);
          // console.log('pippo2', pippo2);
          that.elaboraResponse(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    };

    // funzioneDentro.bind(this)();
    funzioneDentro();
  }

  selectAnimalo = (animale) => {
    this.setState({ animale });
  }

  render = () => (
    <div className="App">
      <LabelBella anim={this.state.animale} ></LabelBella>
      <div className='listaBottoni'>
        <BottoneBello onClickButton={this.selectAnimalo} selezionato={this.state.animale} animalo='suino' key={1} />
        <BottoneBello onClickButton={this.selectAnimalo} selezionato={this.state.animale} animalo='cane' key={2} />
        <BottoneBello onClickButton={this.selectAnimalo} selezionato={this.state.animale} animalo='muflone' key={3} />
      </div>
    </div>
  );
}
