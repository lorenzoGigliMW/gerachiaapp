//import logo from './logo.svg';
import './App.css';
import BottoneBello from './BottoneBello';
import { Component } from 'react';
import LabelBella from './LabelBella';
import axios from 'axios';

export default class AppVegetale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verdura: 'cavolone'
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

  selectVerdura = (verdura) => {
    this.setState({ verdura });
  }

  render = () => (
    <div className="App">
      <LabelBella anim={this.state.verdura} ></LabelBella>
      <div className='listaBottoniDiversi'>
        <BottoneBello onClickButton={this.selectVerdura} selezionato={this.state.verdura} animalo='cavolone' key={1} />
        <BottoneBello onClickButton={this.selectVerdura} selezionato={this.state.verdura} animalo='insalata' key={2} />
        <BottoneBello onClickButton={this.selectVerdura} selezionato={this.state.verdura} animalo='finocchio' key={3} />
      </div>

    </div>
  );
}
