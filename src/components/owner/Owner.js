import React, { Component } from 'react';


import Event from '../event/Event';
import Table from '../table/Table';

class Owner extends Component {

  constructor() {
    super();
    this.state = {
      "showEvent": false,
      "eventClasses": "event-wrapper row hide-info"
    }
  }


  toogleEvent = () => {

    if (this.state.showEvent) {
      this.setState({
        "eventClasses": "event-wrapper row hide-info",
        "showEvent": false,
      });

    } else {
      this.setState({
        "eventClasses": "event-wrapper row show-info",
        "showEvent": true,
      });
    }

  }

  render() {
    return (
      <React.Fragment>
        <div className={"owner-element " + this.props.classes}>
          <div className="Owner row" onClick={this.toogleEvent}>
            <div className="col-2 badge"> </div>
            <div className="col-2 rank">{this.props.rank}</div>
            <div className="col-3 name">{this.props.name}</div>
            <div className="col-2 rumuz">{this.props.rumuze}</div>
            <div className="col-3 points">{this.props.points}</div>
          </div >

          <div className={this.state.showEvent ? this.state.eventClasses : this.state.eventClasses}>
            <Table />
            <Event />
            <Event />
          </div>
        </div>


      </React.Fragment>
    )
  }
}


export default Owner;