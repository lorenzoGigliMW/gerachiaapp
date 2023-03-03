import { Component } from "react";
import PropTypes from 'prop-types';
import "./BottoneBello.scss";

class BottoneBello extends Component {
    constructor() {
        super();

    }
    // render = () => {
    //     return <div></div>
    // }
    render =() => {
        const { onClickButton, selezionato, animalo } = this.props;
        return (
        <div onClick={() => onClickButton(animalo)} className={(animalo === selezionato)?'animaloSelezionato':'animalo'}>{animalo}</div>
        )}
}

BottoneBello.propTypes = {
    onClickButton: PropTypes.func,
    selezionato: PropTypes.string,
    animalo: PropTypes.string
}

export default BottoneBello;