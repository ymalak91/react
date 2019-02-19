import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import axios from 'axios';
// import { findDOMNode } from "react-dom";
// import $ from "jquery";



import './App.css';

import Header from './components/header/Header';
import Note from './components/note/Note';
import Owner from './components/owner/Owner';
import WideOwner from './components/wideOwner/WideOwner';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      slideView: false,
      slideClasses: "slide-wrapper slide-out"
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/users')
      .then(
        response => {
          this.setState({
            data: response.data
          });

        });
  }

  changeView = () => {
    if (this.state.slideView) {
      this.setState({
        slideView: false,
        slideClasses: "slide-wrapper slide-out"
      });

    } else {
      this.setState({
        slideView: true,
        slideClasses: "slide-wrapper slide-in"
      });

    }

  }

  render() {

    return (
      <div className="App">
        <Header />
        <Note />
        <div className="container nav-tools">
          <div className="row">
            <div className="col-3">

            </div>
            <div className="col-3">

            </div>
            <div className="col-6">
              <div className="change-view" onClick={this.changeView}></div>
              <div className="archive-link">أرشيف</div>
            </div>

          </div>
        </div>

        <div className={this.state.slideView ? this.state.slideClasses : this.state.slideClasses}>
          <div className="main-content container">
            <div className="Owner-header row">
              <div className="col-2 badge"> </div>
              <div className="col-2 rank">المركز</div>
              <div className="col-3 name">الاسم</div>
              <div className="col-2 rumuz">الرموز</div>
              <div className="col-3 points">النقاط</div>
            </div >

            <div className="owner-container">
              {this.state.data.map((data, key) =>
                <Owner
                  classes={"item-" + key}
                  key={key + 1}
                  rank={key + 1}
                  name={data.name}
                  points={data.points}
                  rumuze={data.rumuze}
                />
              )}
            </div>
          </div>

          <div className="main-content-wide container wide-look">
            {this.state.data.map((data, key) =>
              <WideOwner
                classes={"item-" + key}
                key={key + 1}
                rank={key + 1}
                name={data.name}
                points={data.points}
                rumuze={data.rumuze}
              />
            )}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
