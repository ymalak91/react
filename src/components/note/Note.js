import React, { Component } from 'react';

class Note extends Component {

  render() {
    return (
      <div className="Note container">
        <div className="row">
          <div className="alert alert-primary">
            ملاحظه: لا تعد النتائج المذكوره أدناه نهائية وتعتمد بشكل رئيسي على قرارات اللجنة المنظمة للمهرجان ونتائج الفحص الطبي
          </div>
        </div>
      </div>
    )
  }
}


export default Note;