import React, { Component } from "react";

export default class NotesForm extends Component {
  render() {
    return (
      <section className="noteform">
        <h3>Create New Note</h3>
        <div className="form-group">
          <label htmlFor="noteform-title">Title</label>
          <input type="text" className="noteform-title" id="noteform-title" />
        </div>
        <div className="form-group">
          <label htmlFor="noteform-note">Note</label>
          <textarea name="noteform-note" id="noteform-note" />
        </div>
        <button>Create Note</button>
      </section>
    );
  }
}
