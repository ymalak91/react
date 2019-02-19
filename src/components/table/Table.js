import React, { Component } from 'react';

class Table extends Component {

  render() {
    return (
      <div className="Table">

        


        <div>
          <div className="Owner-info row" onClick={this.toogleEvent}>
            <div className="col-2 ">السن</div>
            <div className="col-2 hakaka">حقاقة</div>
            <div className="col-2 ">لقايا</div>
            <div className="col-2 ">ايذاع</div>
            <div className="col-2 ">ثنايا</div>
            <div className="col-2 ">رموز</div>
          </div >
          <div className="Owner-info row" onClick={this.toogleEvent}>
            <div className="col-3 ">المركز الاول</div>
            <div className="col-1 ">2</div>
            <div className="col-2 ">0</div>
            <div className="col-2 ">1</div>
            <div className="col-2 ">0</div>
            <div className="col-2 ">0</div>
          </div >
          <div className="Owner-info row" onClick={this.toogleEvent}>
            <div className="col-3 ">المركز الثاني</div>
            <div className="col-1 ">2</div>
            <div className="col-2 ">0</div>
            <div className="col-2 ">1</div>
            <div className="col-2 ">0</div>
            <div className="col-2 ">0</div>
          </div >
          <div className="Owner-info row" onClick={this.toogleEvent}>
            <div className="col-3 ">المركز الثالث</div>
            <div className="col-1 ">2</div>
            <div className="col-2 ">0</div>
            <div className="col-2 ">1</div>
            <div className="col-2 ">0</div>
            <div className="col-2 ">0</div>
          </div >
        </div>
      </div>
    )
  }
}


export default Table;