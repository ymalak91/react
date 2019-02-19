import React, { Component } from 'react';

import Event from '../event/Event';
import Table from '../table/Table';

class WideOwner extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (

      <React.Fragment>
        <div className="owner-icon-big-wrapper"><div className="owner-icon-big"></div></div>
        <div className="WideOwner col-12">
          
          <div className={"owner-element " + this.props.classes}>

            <div className="Owner row">
              <div className="col-5 badge"> </div>
              <div className="col-7 name">{this.props.name}</div>
            </div >

            <div className="row wide-info-label">

              <div className="col-4 labe-rank">الترتيب</div>
              <div className="col-4 label-rumuz">الرموز</div>
              <div className="col-4 labe-points">النقاط</div>

            </div>

            <div className="row wide-info-data">
              <div className="col-4 rank">{this.props.rank}</div>
              <div className="col-4 rumuz">{this.props.rumuze}</div>
              <div className="col-4 points">{this.props.points}</div>
            </div>


            <div className="event-wrapper row">
              <Table />
              <Event />
              <Event />
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}


export default WideOwner;