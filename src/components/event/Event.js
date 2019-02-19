import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      "showInfo": false,
      "infoClasses": "event-info hide-info"
    }
  }

  toogleTiltle = () => {
    if (this.state.showInfo) {
      this.setState({
        "infoClasses": "event-info hide-info",
        "showInfo": false,
      });

    } else {
      this.setState({
        "infoClasses": "event-info show-info",
        "showInfo": true,
      });
    }

  }

  render() {
    return (
      <React.Fragment>

        <div className="col-12 event-name" onClick={this.toogleTiltle}>
          <h3>مهرجان ولي عهد دبي <span className="points-in-title">12</span></h3>
        </div>
        <div className={this.state.showInfo ? this.state.infoClasses : this.state.infoClasses} >
          <div className="row">
            <div className="col-5 date">
              <div className="label">التاريخ</div>
              <div className="event-date">12/12/2012</div>
            </div>
            <div className="col-4 event-round">
              <div className="label">الشوط</div>
              <div className="event-round">2</div>
            </div>
            <div className="col-3 event-rank">
              <div className="label">المركز</div>
              <div className="event-rank">2</div>
            </div>
          </div>
          <div className="row">
            <div className="col-5 date">
              <div className="label">السن</div>
              <div className="event-date">حقايق</div>
            </div>
            <div className="col-4 event-round">
              <div className="label">التوقيت</div>
              <div className="event-round">5:20:22</div>
            </div>
            <div className="col-3 event-rank">
              <div className="label">النقاط</div>
              <div className="event-rank">6</div>
            </div>
          </div>
          <div className="row">
          <div className="col-12 event-video">
              <div className="label">الفيديو</div>
              <div className="event-rank"></div>
            </div>
          </div>

        </div>


      </React.Fragment>
    )
  }
}


export default Event;