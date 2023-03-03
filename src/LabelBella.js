import { render } from "@testing-library/react"
import { Component } from "react"

export default class Label extends Component {
    render = () => (<div>{this.props.anim}</div>);
}