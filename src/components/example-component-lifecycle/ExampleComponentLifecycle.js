import React, { Component } from 'react'
import Home from './partial-components/Home';
import { Header } from './partial-components/Header';


export default class ExampleComponentLifecycle extends Component {

  constructor(props) {
    super(props)

    this.state = {
      homeLink: 'Home',
      homeMounted: true
    }
  }
  onGreet() {
    alert("Hello!");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {
    let homeComponent = "";

    if (this.state.homeMounted) {
      homeComponent = (
        <Home
          name={"Max"}
          initialAge={27}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        />
      );
    }
    return (
      <div className="container">
        <span>{this.props.children}</span>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            {homeComponent}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
          </div>
        </div>
      </div>
    );
  }
}
