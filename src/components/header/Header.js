import React, { Component } from 'react';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <header className="Header container">
        <div className="row">
          <div className="col-2">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
          </div>
          <div className="col-6">
            <h1 className="main-title">بيرق أبناء القبائل</h1>
          </div>
          <div className="col-4">
            <img className="logo img-responsive" alt='logo' src='logo.png' />
          </div>
        </div>
      </header>
    )
  }
}


export default Header;